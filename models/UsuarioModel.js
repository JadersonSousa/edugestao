const mongoose = require("../database/db");
const moment = require("moment-timezone")
moment.tz.setDefault('America/Fortaleza')

const UsuarioSchema = new mongoose.Schema({
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
        ref: 'empresa'
    },
    nomeCompleto: {
        type: String,
        required: true,
        index:{
            unique: true
        },
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
        trim: true,
        select: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: ()=>moment.tz.ut
    }


}, {timestamps: true})

const UsuarioModel = mongoose.model('ususario', UsuarioSchema);

module.exports = UsuarioModel;