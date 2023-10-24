import db from '../database/db.js';
import { DataTypes , UUIDV4 } from 'sequelize';


const ProductModel = db.define("products", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,},
    product_name:{type:DataTypes.STRING}, 
    artist_id:{type:DataTypes.INTEGER},
    artist_name:{type:DataTypes.STRING}, 
    product_size:{type:DataTypes.STRING},
    product_material:{type:DataTypes.STRING},
    product_description:{type:DataTypes.STRING}, 
    product_category:{type:DataTypes.STRING},
    price:{type:DataTypes.FLOAT},
    stock:{type:DataTypes.FLOAT}, 
    product_image:{type:DataTypes.STRING},
},{
    timestamps: false
})


export default ProductModel;