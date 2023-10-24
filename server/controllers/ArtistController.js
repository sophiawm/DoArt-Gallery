import ArtistModel from '../models/ArtistModel.js';
import ProductModel from '../models/ProductModel.js';

    //POST - CREATE OF CRUD
export const createArtist = async (req, res) => {
    try{
        await ArtistModel.create(req.body)
        res.json({message: "The artist has been added successfully!"})
    }catch (error){
        res.status(500).json({message: error.messge})
    }
};

    //GET THE R OF CRUD
export const getAllArtists = async (_req, res) => {
    try{
        const artists = await ArtistModel.findAll()
        res.json(artists)
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
};

//GET ONE ARTIST - REVIEW OF CRUD
export const getArtist = async (req, res) => {
    try {
        const artist = await ArtistModel.findByPk(req.params.id);
        if (!artist) {
            return res.status(500).json({ message: 'Artist not found' });
        }
        await ArtistModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The Artist has been found successfully!', artist });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

    //GET ONE ARTIST'S PRODUCTS 
export const getArtistProducts = async(req, res) =>{
    const {id} = req.params
    try{
        const artist = await ProductModel.findAll ({ where: {artist_id:id}})
        res.json(artist);
    } catch (error) {
        return res.status(500).json ({message: error.errors});
    }
    }


    //PUT - UPDATE OF CRUD
export const updateArtist = async (req, res) => {
    try {
        const artist = await ArtistModel.findByPk(req.params.id);
        if (!artist) {
            return res.status(500).json({ message: 'artist not found' });
        }
        await ArtistModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The artist information has been updated successfully!', artist });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

    //DELETE - DELETE OF CRUD
export const deleteArtist = async (req, res) => {
    try {
        const artist = await ArtistModel.findByPk(req.params.id);
        if (!artist) {
            return res.status(500).json({ message: 'Artist not found' });
        }
        await ArtistModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'The artist has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

