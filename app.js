const express = require("express");
require("./database/db")
const cookieParser = require("cookie-parser");
require("dotenv").config({path: './config/.env'});
const route = require("./routes/route");
const cors = require("cors")



const app = express()

const optionsCors = {
  methods: "GET, POST, PUT, OPTIONS, DELETE, PATCH",
  origin: "*"
}

app.use(cors(optionsCors))

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cookieParser());


app.use('/', route)


const PORT = 8081 || process.env.PORT
app.listen(PORT, ()=> 
  console.log(`Servidor rodando na PORT:${PORT}`)
)