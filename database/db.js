const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/bgestao", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

.then(connected=> console.log("Conectado com o banco"))
.catch(err=>console.log("Erro ao conectar ao banco"))


mongoose.Promise = global.Promise;

module.exports = mongoose;