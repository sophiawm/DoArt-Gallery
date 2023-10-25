import {Sequelize} from "sequelize";


const db = new Sequelize ('DoArt', USER_DATABASE , DATABASE_PASSWORD, {
    host: 'localhost',
    dialect:'mysql'
});

export default db;