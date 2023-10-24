import ProductModel from '../models/ProductModel.js';
import ArtistModel from '../models/ArtistModel.js';

//to upload images
//import multer from 'multer';
//const path = require('path')

//import upload from '../middleWares/multer.js'


//POST - CREATE OF CRUD

export const createProduct = async (req, res) => {
    /*let info = {
        product_name: req.body.product_name,
        artist_id:req.body.artist_id,
        product_description: req.body.product_description,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        image: req.file.path
        }*/
    try{
        /*await ProductModel.create(req.body)
        const artist = await ArtistModel.findByPk(req.body.artist_id)
        if (!artist) {
            return res.status(500).json({ message: 'Artist not found' });
        }*/
        res.status(200).json({message: "This product has been added successfully!"})
    }catch (error){
        res.status(500).json({message: error.errors/* "Product could not be added, please be sure to complete all fields."*/})
    }
}

// GET - REVIEW OF CRUD

export const getAllProducts = async (_req, res) => {
    try{
        const products = await ProductModel.findAll()
        res.json(products);
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
}


//GET ONE PRODUCT - REVIEW OF CRUD
export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByPk(req.params.id);
        if (!product) {
            return res.status(500).json({ message: 'Product not found' });
        }
        await ProductModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The product has been found successfully!', product });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

    //GET All SOLD PRODUCTS 
export const getSoldProducts = async(req, res) =>{
        const {id} = req.params
        try{
            const soldProducts = await OrderModel.findAll ({ where: {product_id:id}})
            res.json(soldProducts);
        } catch (error) {
            return res.status(500).json ({message: error.errors});
        }
        };

//PUT - UPDATE OF CRUD

export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByPk(req.params.id);
        if (!product) {
            return res.status(500).json({ message: 'Product not found' });
        }
        await ProductModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The product has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//DELETE - DELETE OF CRUD

export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByPk(req.params.id);
        if (!product) {
            return res.status(500).json({ message: 'Product not found' });
        }
        await ProductModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'The product has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};