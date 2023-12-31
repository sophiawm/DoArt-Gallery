import CustomerModel from '../models/CustomerModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// GET - REVIEW OF CRUD

export const getAllCustomers = async (_req, res) => {
    try{
        const customers = await CustomerModel.findAll()
        res.json(customers);
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
}

//POST - CREATE OF CRUD

export const createCustomer = async (req, res) => {
    try{
        await CustomerModel.create(req.body)
        res.status(200).json({message: "This customer has been added successfully!", customer})
    }catch (error){
        res.status(500).json({message: "Customer could not be added, please be sure to complete all fields."})
    }
}

//GET ONE CUSTOMER- REVIEW OF CRUD
export const getCustomer = async (req, res) => {
    try {
        const customer = await CustomerModel.findByPk(req.params.id);
        if (!customer) {
            return res.status(500).json({ message: 'Customer not found' });
        }
        await CustomerModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The Customer has been found successfully!', customer });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//PUT - UPDATE OF CRUD

export const updateCustomer = async (req, res) => {
    try {
        const customer = await CustomerModel.findByPk(req.params.id);
        if (!customer) {
            return res.status(500).json({ message: 'Customer not found' });
        }
        await CustomerModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The customer has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//DELETE - DELETE OF CRUD

export const deleteCustomer = async (req, res) => {
    try {
        const customer = await CustomerModel.findByPk(req.params.id);
        if (!customer) {
            return res.status(500).json({ message: 'Customer not found' });
        }
        await CustomerModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'The customer has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Customer Login Controller

export const loginCustomer = async (req, res) => {
    const { user_email, user_password } = req.body;
    try {
        const customer = await CustomerModel.findOne({ where: { user_email } });

        if (!customer) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(user_password, customer.user_password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const secretKey = process.env.SECRET_KEY;
        console.log("Secret Key:", secretKey)
        const token = jwt.sign({ id: customer.id, user_email: customer.user_email }, secretKey);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};