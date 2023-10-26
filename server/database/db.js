import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize ('DoArt', 'root', 'ODC1', {
    host: 'localhost',
    dialect:'mysql'
});

export default db