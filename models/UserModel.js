const mongoose = require("../database/db");

const UserSchema = new mongoose.Schema({
    codigoUsuario: {
        type: Number,
        default: 1,        
        index:{
            unique: true
        },
        required: true
    },
    empresaUsuarioId: {
        type: mongoose.Types.ObjectId,
        ref: 'empresa',
        required: true
    },
    nomeCompleto: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    funcao: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    }


}, {timestamps: true})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;