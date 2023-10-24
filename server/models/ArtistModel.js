import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import { UUIDV4 } from 'sequelize';
import ProductModel from './ProductModel.js';



const ArtistModel = db.define("artists", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,
    },
    artist_name:{type:DataTypes.STRING},
    artist_description:{type:DataTypes.STRING},
    products:{type:DataTypes.STRING}, 
    categories:{type:DataTypes.STRING},
},{
    timestamps: false
})


ProductModel.belongsTo(ArtistModel, {
    foreignKey: "artist_id", as:"artist"
})

export default ArtistModel;