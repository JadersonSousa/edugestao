const mongoose = require("../database/db");

const CursoSchema = new mongoose.Schema({
    codigoCurso: {
        type: Number,
        required: true
    },
    nomeCurso: {
        type: String
    },
    polo: {
        type: mongoose.Types.ObjectId,
        ref: 'filial'
    },
    turmasCurso: {
        type: [String]
    },
    
    dataCriacaoCurso: {
        type: Date,
        default: Date.now()
    }

}, {timestamps: true})

const CursoModel = mongoose.model('curso', CursoSchema);

module.exports = CursoModel;