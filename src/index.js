'use strict'

const express = require("express")

const morgan = require("morgan")

const app = express()

const config = require("./config/config")


//MIDDLEWARES
app.use(morgan("short"))
app.use(express.json())

//ROUTES
app.use(require("./routes"))

//STATIC

//SERVER
app.listen(config.port, ()=>{
    console.log(`Server running on port: http://127.0.0.1:${config.port}`)
})