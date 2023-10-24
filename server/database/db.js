import {Sequelize} from "sequelize";

const db = new Sequelize ('DoArt', 'root', 'ODC1', {
    host: 'localhost',
    dialect:'mysql'
});

export default db;