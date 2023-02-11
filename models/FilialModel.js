const mongoose = require("../database/db");

const FilialSchema = new mongoose.Schema({
    empresaId: {
        type: mongoose.Types.ObjectId,
        ref: 'empresa',
        required: true
    },
    codigoEmpresa: {
        type: Number,
        required: true
    },
    codigoFilial: {
        type: Number,
        required: true
    },
    nomeUnidade: {
        type: String,
        required: true,
        trim: true
    },
    cnpjUnidade: {
        type: String
    },
    zonaUnidade: {
        type: String
    },
    centrosCustos: [String],
    modalidadesEnsino: [String],

    cursosUnidade: [{
        type: mongoose.Types.ObjectId,
        ref: 'curso'
    }],

    dataCriacaoUnidade: {
        type: Date,
        default: Date.now()
    }

}, {timestamps: true})


const FilialModel = mongoose.model('filial', FilialSchema);

module.exports = FilialModel;