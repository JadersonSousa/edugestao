const mongoose = require("mongoose");
require("dotenv").config({path: './config/.env'});

const MONGO_URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.6qmznvo.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

.then(connected=> console.log("Conectado com o banco"))
.catch(err=>console.log("Erro ao conectar ao banco", err))


mongoose.Promise = global.Promise;

module.exports = mongoose;