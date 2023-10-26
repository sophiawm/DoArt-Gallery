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
    admin_name:{type:DataTypes.STRING}, 
    admin_email:{type:DataTypes.STRING}, 
    admin_password:{type:DataTypes.STRING},
    roles:{type:DataTypes.STRING}, 
},{
    timestamps: false
})

AdminModel.addHook('beforeCreate', async (admin) => {
    const saltRounds = 10; // higher numbers hash the password harder
    const hashedPassword = await bcrypt.hash(admin.admin_password, saltRounds);
    admin.admin_password = hashedPassword;
});


export default AdminModel;