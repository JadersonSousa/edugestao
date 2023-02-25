const express = require("express");
require("./database/db")
const cookieParser = require("cookie-parser");
require("dotenv").config({path: './config/.env'});
const route = require("./routes/route");



const app = express()


app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cookieParser());


app.use('/', route)


const PORT = 8080 || process.env.PORT
app.listen(PORT, ()=> 
  console.log(`Servidor rodando na PORT:${PORT}`)
)