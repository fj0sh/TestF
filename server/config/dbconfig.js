require('dotenv').config();
const mysql = require('mysql2')

const conn  = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB,
    port:process.env.DB_PORT
})

conn.connect((err) => {
    if(err) throw err;
    console.log('DB connected');
})

module.exports = conn;