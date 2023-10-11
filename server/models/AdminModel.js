import db from '../database/db.js';
import { DataTypes, UUIDV4 } from 'sequelize';

const AdminModel = db.define("admins", {
    id: {type:DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,},
    user_name:{type:DataTypes.STRING}, 
    user_email:{type:DataTypes.STRING}, 
    user_password:{type:DataTypes.STRING},
    roles:{type:DataTypes.STRING}, 
},{
    timestamps: false
})

export default AdminModel;