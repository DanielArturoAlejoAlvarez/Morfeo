'use strict'

const mysql = require("mysql")

const DB = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'morfeodb'
})

module.exports = DB