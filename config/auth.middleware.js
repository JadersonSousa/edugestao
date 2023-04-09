const jwt = require("jsonwebtoken");
const UsuarioModel = require("../models/UsuarioModel");
require("dotenv").config({path: './config/.env'});

module.exports.requireAuth = async (req, res, next)=>{
    const sceret = process.env.TOKEN_SECRET
    const authHeader = req.headers.authorization;

    try {
        if(!authHeader)
            return res.status(401).send({error: 'No token provide'})
    
        const parts = authHeader.split(' ')
    
        if(!parts.length == 2)
            return res.status(401).send({error: 'Token error'})
        
        const [scheme, token] = parts;
        
        if(!/^Berear$/i.test(scheme))
            return res.status(401).send({error: 'Token malformatted'})
    
        jwt.verify(token, sceret, async (err, decoded)=>{
                if(err){
                    return res.status(401).json({status: false, error: err.message == 'jwt expired' ? 'Sessão expirada' : err.message })
                }
            const user = await UsuarioModel.findById(decoded.id.id)
            
            if(!user || !user._id){
                return res.status(401).json({error: "Usuario e token invalido ou não existe!"})
            }
            
            req.userId = user._id;
            
            return next()
        })
        
    } catch (error) {
        console.log("erro na auth.middleware: ", error)
    }

    
}

module.exports.checkToken = async (req, res)=>{
    const sceret = process.env.TOKEN_SECRET
    const token = req.headers.authorization;
    
    try {
    
        jwt.verify(token, sceret, async (err, decoded)=>{
                if(err){
                    return res.status(401).json({status: false, error: err.message == 'jwt expired' ? 'Sessão expirada' : err.message })
                }
            const user = await UsuarioModel.findById(decoded.id.id)
           
            
            return res.status(200).json({token: decoded, status: 'sucesso'})
        })
        
    } catch (error) {
        console.log("erro na auth.middleware: ", error)
    }

    
}