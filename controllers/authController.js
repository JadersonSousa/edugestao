const UsuarioModel = require("../models/UsuarioModel");
const jwt = require("jsonwebtoken");
//erros


const maxAge = 3 * 24 * 60 * 60 * 1000;

//CRIAÇÃO DO TOKEN DE AUTENTICAÇÃO
module.exports.createToken = (id) =>{
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};


module.exports.signIn = async (req, res)=>{
    const {email, senha} = req.body;
    const user = await UsuarioModel.findOne({email: email, senha: senha});

    try {
        
        const token = await this.createToken(user._id);
        
        //res.cookie('jwt', token, {httpOnly: true, maxAge })
        res.status(200).json({user: user, token})

    } catch (error) {
        res.status(400).json(error)
    }

}