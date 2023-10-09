import db from '../database/db.js';
import { DataTypes } from 'sequelize';


const ArtistModel = db.define("artists", {
    artist_name:{type:DataTypes.STRING}, 
    products:{type:DataTypes.STRING}, 
    categories:{type:DataTypes.STRING},
},{
    timestamps: false
})

export default ArtistModel;