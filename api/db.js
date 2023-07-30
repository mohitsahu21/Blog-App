import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

export const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME
}) 


