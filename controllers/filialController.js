const FilialModel = require('../models/FilialModel');

module.exports.createFilial = async (req, res) =>{
    const newFilial = await FilialModel({
        empresaId: "",
        codigoEmpresa: "", 
        codigoFilial: "",
        nomeUnidade: "",
        cnpjUnidade: "",
        zonaUnidade: "",
        centrosCustos: "",
        cursosUnidade: ""
    })
    try {

        res.status(201).json({status: "Conecatdo", sucesso: true});
    } catch (error) {
        res.status(400).json({status: "Não conectado", erros: error});
       
    }
}