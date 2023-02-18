const UsuarioModel = require('../models/UsuarioModel');
const {errorFormater} = require("../utils");
const ObjectID = require("mongoose").Types.ObjectId

module.exports.createUsuario = async (req, res) =>{

   const codigoUsuario = await UsuarioModel.find().sort({_id: 'DESC'})
   var i = 0;
   for (; i < codigoUsuario.length; i++) { }
   const code = codigoUsuario[0] == null ? 1 : codigoUsuario[0].codigoUsuario += 1;

   const { 
        empresaUsuarioId,
        nomeCompleto,
        funcao,
        email,
        senha,
        confirmSenha
    } = req.body;
    
    const newUsuario = await UsuarioModel({
        codigoUsuario: code,
        empresaUsuarioId: ObjectID(empresaUsuarioId),
        nomeCompleto,
        funcao,
        email,
        senha
    })
    try {
        const usuario = await newUsuario.save()
        res.status(200).json({status: "Conectado", sucesso: true, data: usuario});
    } catch (error) {
        res.status(400).json({status: "Não conectado", erros: error});
       
    }
}