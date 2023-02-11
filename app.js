const express = require("express")
const route = require("./routes/route")

const app = express()


app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use('/', route)



app.listen(8080, ()=> 
console.log("rodando na 8080")
)