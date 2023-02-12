const express = require("express")
const route = require("./routes/route")

const app = express()


app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use('/', route)



const PORT = 8080 || process.env.PORT
app.listen(PORT, ()=> 
console.log("rodando na 8080")
)