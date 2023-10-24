import AdminModel from '../models/AdminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();



//import verifyToken from '../middleWares/jwtMiddleware.js';  to verify token before allowing actions

//POST - CREATE OF CRUD

export const createAdmin = async (req, res) => {
    try{
        await AdminModel.create(req.body)
        res.status(200).json({message: "This administrator has been added successfully!"})
    }catch (error){
        res.status(500).json({message: error})
    }
}

// GET - REVIEW OF CRUD

export const getAllAdmins = async (_req, res) => {
    try{
        const admins = await AdminModel.findAll()
        res.json(admins);
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
};



//GET ONE ADMIN - REVIEW OF CRUD
export const getAdmin = async (req, res) => {
    try {
        const admin = await AdminModel.findByPk(req.params.id);
        if (!admin) {
            return res.status(500).json({ message: 'Administrator not found' });
        }
        await AdminModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The Administrator has been found successfully!', admin });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//PUT - UPDATE OF CRUD

export const updateAdmin = async (req, res) => {
    try {
        const admin = await AdminModel.findByPk(req.params.id);
        if (!admin) {
            return res.status(500).json({ message: 'Administrator not found' });
        }
        await AdminModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The Administrator has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.errors });
    }
};

//DELETE - DELETE OF CRUD

export const deleteAdmin = async (req, res) => {
    try {
        const admin = await AdminModel.findOne({where:{id:req.params.id}});
        console.log(admin)
        if (!admin) {
            return res.status(500).json({ message: 'Administratior not found' });
        }
        await AdminModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'This administrator has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};


// ADMIN Login Controller

export const loginAdmin = async (req, res) => {
    const { admin_email, admin_password } = req.body;
    try {
        const admin = await AdminModel.findOne({ where: { admin_email } });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(admin_password, admin.admin_password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const secretKey = process.env.SECRET_KEY;
        console.log("Secret Key:", secretKey)
        const token = jwt.sign({ id: admin.id, admin_email: admin.admin_email }, secretKey);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
