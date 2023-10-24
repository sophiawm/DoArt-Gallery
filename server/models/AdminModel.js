import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import { UUIDV4 } from "sequelize";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const AdminModel = db.define("admins", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,
    },
    user_name:{type:DataTypes.STRING}, 
    user_email:{type:DataTypes.STRING}, 
    user_password:{type:DataTypes.STRING},
    roles:{type:DataTypes.STRING}, 
},{
    timestamps: false
})

AdminModel.addHook('beforeCreate', async (admin) => {
    const saltRounds = 10; // You can adjust this based on your security needs
    const hashedPassword = await bcrypt.hash(admin.user_password, saltRounds);
    admin.user_password = hashedPassword;
});


export default AdminModel;