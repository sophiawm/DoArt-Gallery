import db from '../database/db.js';
import { DataTypes , UUIDV4 } from 'sequelize';


const ProductModel = db.define("products", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,},
    product_name:{type:DataTypes.STRING}, 
    artist_id:{type:DataTypes.INTEGER}, 
    product_description:{type:DataTypes.STRING}, //schema varchar
    category:{type:DataTypes.STRING},
    price:{type:DataTypes.FLOAT},
    stock:{type:DataTypes.FLOAT}, //should it be integer
},{
    timestamps: false
})




export default ProductModel;