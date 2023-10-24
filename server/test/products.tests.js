import request from "supertest";
import ProductModel from "../models/ProductModel.js"
import {app, server} from "../app.js";
import db from "../database/db.js";

describe ("Test CRUD products", () => {
    describe("GET /products", () => {
        test('should return a response with status 200 and type json', async() => {
            const response = await request(app).get('/products').send();
						expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
    })
        test("should return all products", async () => {
            const response = await request(app).get('/products').send();
                    expect(response.body).toBeInstanceOf(Array);
        })


//////TESTS FOR POSTING NEW PRODUCTS
describe('POST /products',() =>{ 

    const newProduct = {
        product_name: "test",
        artist_id: 1,
        product_description: "test",
        category: "test",
        price: 10
    }

    const wrongProduct = {
        wrong_field:'test'
    }
    test('should return a response with status 200 and type json', async () =>{
        const response = await request(app).post('/products').send(newProduct)
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toContain('json')
    })

    test('should return a message product created successfully', async () =>{
        const response = await request(app).post('/products').send(newProduct)
        expect(response.body.message).toContain("This product has been added successfully!")
    })

    test('should return a message insertion error If post wrong product ', async () =>{
        const response = await request(app).post('/products').send(wrongProduct)
        expect(response.status).toBe(500);
        expect(response.body.message).toContain("Product could not be added, please be sure to complete all fields.")
    })
///DELETS TEST POSTS FROM DATABASE
    afterAll(async() => {
        await ProductModel.destroy({
            where:{product_name: "test"}
        })
    });
//////TESTS FOR UPDATING PRODUCTS

describe('PUT /products', () =>{
    let createdProduct = {};
    beforeEach(async () => {
        createdProduct = await ProductModel.create({ 
            product_name: "test",
            artist_id: 1,
            product_description: "new product",
            category: "test",
            price: 25,
        });
    });

    afterAll(async() =>{
        await ProductModel.destroy({where:{ id: createdProduct.id}})
    })

test('should return a response with status 201 and update successfully', async () => {
    const response = await request(app).put(`/products/${createdProduct.id}`).send({product_name: "updated name"});
    expect(response.status).toBe(201);
    expect(response.body.message).toContain("The product has been updated successfully!")
})
});

///TEST FOR DELETING PRODUCTS

describe('DELETE /products', () =>{
    let createdProduct = {};
    beforeEach(async () => {
        createdProduct = await ProductModel.create({ 
            product_name: "test",
            artist_id: 1,
            product_description: "new test",
            category: "test",
            price: 11,
        });
    });

    afterAll(async() =>{
        await ProductModel.destroy({where:{ id: createdProduct.id}})
    })

test('should return a response with status 203 and update successfully', async () => {
    const response = await request(app).put(`/products/${createdProduct.id}`).send();
    expect(response.status).toBe(201);
    expect(response.body.message).toContain("The product has been deleted successfully!")
})
});

    afterAll(()=> {
        server.close();
        db.close()
    });

});

})