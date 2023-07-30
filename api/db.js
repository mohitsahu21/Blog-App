import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mohitsahu@21",
    database:"blog"
}) 


