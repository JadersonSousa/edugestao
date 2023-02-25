const UsuarioModel = require("../models/UsuarioModel");
require("dotenv").config({path: './config/.env'});
const jwt = require("jsonwebtoken");
//erros


const maxAge = 6 * 24 * 60 * 60 * 1000;

//CRIAÇÃO DO TOKEN DE AUTENTICAÇÃO
module.exports.createToken = (id) =>{
    return jwt.sign({id: id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};


module.exports.signIn = async (req, res)=>{
    const {email, senha} = req.body;
    const user = await UsuarioModel.findOne({email: email, senha: senha});

    try {
        
        const token = await this.createToken({id: user._id});
        
        //res.cookie('jwt', token, {httpOnly: true, maxAge })
        res.status(200).json({user: user, token})

    } catch (error) {
        res.status(400).json(error)
        console.log("ERROR NA AUTHCONTROLLER ", error)
    }

}