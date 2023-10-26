import request from "supertest";
import ArtistModel from "../models/ArtistModel.js";
import {app, server} from "../app.js";
import db from "../database/db.js";

describe ("Test CRUD artists", () => {
    describe("GET /artists", () => {
        test('should return a response with status 200 and type json', async() => {
            const response = await request(app).get('/artists').send();
				expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
    })
        test("Should return all artists", async () => {
            const response = await request(app).get('/artists').send();
				expect(response.body).toBeInstanceOf(Array);
            })
    
    //test for posting new artist
    describe('POST /artists',() =>{ 
        const newArtist = {
            artist_name: "test",
            products: "test",
            categories: "test",
        }
        const wrongArtist = {
            wrong_field:'test'
        }
        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/artists').send(newArtist)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });
        test('should return a message artist added successfully', async () =>{
            const response = await request(app).post('/artists').send(newArtist)
            expect(response.body.message).toContain("The artist has been added successfully!")
        });
        test('should return a message insertion error If post wrong artist ', async () =>{
            const response = await request(app).post('/artists').send(wrongArtist)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'artist_name' doesn't have a default value")
        });
        afterAll(async() => {
            await ArtistModel.destroy({
                where:{artist_name: "test"}
            })
        });
    });

///TEST TO UPDATE - THE U IN CRUD

        describe('PUT /artists', () =>{  
            let createdArtist = {};
            beforeEach(async () => {
                createdArtist = await ArtistModel.create({ 
                    artist_name: "test",
                    products: "test",
                    categories: "test",
                });
            });

        afterAll(async() =>{
            await ArtistModel.destroy({where:{ id: createdArtist.id}})
        })

    test('should return a response with status 201 and update successfully', async () => {
            const response = await request(app).put(`/artists/${createdArtist.id}`).send({title: "update test"});
            expect(response.status).toBe(201);
            expect(response.body.message).toContain("The artist has been updated successfully!")
        })
    });

//DELETE -THE D IN CRUD

    describe('DELETE /artists', () =>{
        let createdArtist = {};
        beforeEach(async () => {
                createdArtist = await ArtistModel.create({ 
                    artist_name: "test",
                    products: "test",
                    categories: "test",
                });
            })
        afterAll(async() =>{
            await ArtistModel.destroy({where:{ id: createdArtist.id}})
        })
    test('should return a response with status 203 and deleted successfully', async () => {
            const response = await request(app).delete(`/artists/${createdArtist.id}`).send();
            expect(response.status).toBe(203);
            expect(response.body.message).toContain("The artist has been deleted successfully!")
        })      
    });

    afterAll(()=> {
        server.close();
        db.close()
    });

})