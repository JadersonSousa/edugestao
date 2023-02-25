const express = require("express")
const {createEmpresa, findAllEmpresas, findOneEmpresa, updateEmpresa, patchEmpresa, deleteEmpresa, error404} = require("../controllers/empresaController")
const {createFilial} = require("../controllers/filialController");
const {createUsuario} = require("../controllers/usuarioController");
const {signIn} = require("../controllers/authController");
const {requireAuth} = require("../config/auth.middleware")
const route = express.Router()


/*ROTAS DE EMPRESA*/
route.post('/create/empresa', requireAuth, createEmpresa)
route.get('/find/empresa', requireAuth, findAllEmpresas)
route.get('/findone/:id/:_id/empresa', requireAuth, findOneEmpresa)
route.put('/update/:id/:_id/empresa', requireAuth, updateEmpresa)
route.patch('/patch/:id/:_id/empresa', requireAuth, patchEmpresa)
route.delete('/delete/:id/:_id/empresa', requireAuth, deleteEmpresa)

/*ROTAS DE USUARIO*/
route.post('/create/usuario', requireAuth, createUsuario)
route.post('/sign/usuario', signIn)
//route.get('/logout/usuario', logout)

/*ROTAS DE FILIAL*/
route.post('/create/filial', requireAuth, createFilial)


/*ROTAS DE 404*/
route.get("*", error404)
route.post("*", error404)
route.put("*", error404)
route.delete("*", error404)

module.exports = route;