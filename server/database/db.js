import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const USER_DATABASE = process.env.USER_DATABASE;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const db = new Sequelize('DoArt', USER_DATABASE, DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;