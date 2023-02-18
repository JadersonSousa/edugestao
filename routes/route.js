const express = require("express")
const {createEmpresa, findAllEmpresas, findOneEmpresa, updateEmpresa, patchEmpresa, deleteEmpresa, error404} = require("../controllers/empresaController")
const {createFilial} = require("../controllers/filialController");
const {createUsuario} = require("../controllers/usuarioController");
const {signIn} = require("../controllers/authController")
const route = express.Router()


/*ROTAS DE EMPRESA*/
route.post('/create/empresa', createEmpresa)
route.get('/find/empresa', findAllEmpresas)
route.get('/findone/:id/:_id/empresa', findOneEmpresa)
route.put('/update/:id/:_id/empresa', updateEmpresa)
route.patch('/patch/:id/:_id/empresa', patchEmpresa)
route.delete('/delete/:id/:_id/empresa', deleteEmpresa)

/*ROTAS DE USUARIO*/
route.post('/create/usuario', createUsuario)
route.post('/sign/usuario', signIn)

/*ROTAS DE FILIAL*/
route.post('/create/filial', createFilial)


/*ROTAS DE 404*/
route.get("*", error404)
route.post("*", error404)
route.put("*", error404)
route.delete("*", error404)

module.exports = route;