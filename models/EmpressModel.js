const mongoose = require("../database/db");
const {date} = require("../utils")

const EmpresaSchema = new mongoose.Schema({
    cnpj: {
        type: String,
        required: [true, "CNPJ obrigatorio"],
        trim: true,
        default: 0,
        maxlength: 14,
        index:{
            unique: true
        }
    },
    codigoEmpresa: {
        type: Number,
        default: 1,        
        index:{
            unique: true
        },
        required: true
    },
    razaoSocial: {
        type: String,
        required: [true, "Razão social obrigatorio"],
        trim: true,        
        unique: true
        
    },
    nomeFantasia: {
        type: String,
        required: [true, "Nome fantasia obrigatorio"],
        trim: true,
        index:{
            unique: true
        }
    },
    atividadeEmpresarial: {
        type: String,
        required: [true, "Atividade empresarial obrigatorio"],
        trim: true
    },
    atividadeEconomica: {
        type: String,
        required: [true, "Atividade economica obrigatorio"],
        trim: true
    },
    naturezaJuridica: {
        type: String,
        required: [true, "Atividade economica obrigatorio"],
        trim: true
    },
    dataAbertura: {
        type: String,
        required: [true, "Informe a data de abertura da empresa"],
        trim: true
    },
    porte: {
        type: String,
        required: [true, "Porte obrigatorio"]
    },
    logradouro: {
        type: String,
        required: [true, "Informe o logradouro da empresa"]
    },
    numero: {
        type: Number,
        trim: true,
        required: [true, "Informe o número de endereço"]
    },
    complemento: {
        type: String,
        trim: true
    },
    cep: {
        type: String,
        required: [true, "Informe o cep"]
    },
    bairro: {
        type: String,
        required: [true, "Informe o bairro"]
    },
    municipio: {
        type: String,
        trim: true,
        required: [true, "Informe o municipio"]
    },
    uf: {
        type: String,
        required: [true, "Informe a UF"]
    },
    email: {
        type: String,
        required: [true, "Informe um e-mail"]
    },
    telefone: {
        type: String
    },
    situacao: {
        type: Boolean,
        default: true
    },
    dataCriacaoEmpresa: {
        type: Date,
        default: Date.now()
    },
    polos:{
        type: [Number],
        trim: true,
        select: false
    }
}, {timestamps: true})

const EmpresaModel = mongoose.model("empresa", EmpresaSchema)

module.exports =  EmpresaModel;