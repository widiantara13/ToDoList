import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_host = process.env.DB_HOST;
const db_dialect = process.env.DB_DIALECT;

const db = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: db_dialect
});

export default db;