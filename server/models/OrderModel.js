import db from '../database/db.js';
import { DataTypes, UUIDV4 } from 'sequelize';
import ProductModel from './ProductModel.js';


const OrderModel = db.define("orders", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,
    },
    customer:{type:DataTypes.STRING}, //FK user name
    product_ids:{type:DataTypes.STRING}, //FK product name
    quantity:{type:DataTypes.INTEGER}, 
    price:{type:DataTypes.FLOAT}, 
    order_status:{type:DataTypes.INTEGER},
},{
    timestamps: false
})


export default OrderModel;