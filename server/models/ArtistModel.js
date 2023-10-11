import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import { UUIDV4 } from 'sequelize';


const ArtistModel = db.define("artists", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,
    },
    artist_name:{type:DataTypes.STRING}, 
    products:{type:DataTypes.STRING}, 
    categories:{type:DataTypes.STRING},
},{
    timestamps: false
})

export default ArtistModel;