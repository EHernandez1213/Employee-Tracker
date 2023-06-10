// const express = require('express');
const mysql = require('mysql2');
const util = require('util')
// const app = express();

// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
);
connection.connect()
connection.query = util.promisify(connection.query)
module.export = connection
