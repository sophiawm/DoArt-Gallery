import db from '../database/db.js';
import { DataTypes , UUIDV4} from 'sequelize';

const CustomerModel = db.define("customers", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,
    },
    user_name:{type:DataTypes.STRING}, 
    user_email:{type:DataTypes.STRING}, 
    user_password:{type:DataTypes.STRING}, 
    user_address:{type:DataTypes.STRING}, 
},{
    timestamps: false
})

export default CustomerModel;