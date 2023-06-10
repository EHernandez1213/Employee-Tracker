const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    }
)