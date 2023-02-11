const EmpresaModel = require("../models/EmpressModel");
const {errorFormater} = require("../utils")

//CRIANDO EMPRESA
module.exports.createEmpresa = async (req, res)=>{
    const codigoEmp = await EmpresaModel.find().sort({_id: 'DESC'})
    var i = 0;
    for (; i < codigoEmp.length; i++) { }
    const code = codigoEmp[0] == null ? 1 : codigoEmp[0].codigoEmpresa += 1;
    
    const {
        cnpj,
        razaoSocial,
        nomeFantasia,
        atividadeEmpresarial,
        atividadeEconomica,
        naturezaJuridica,
        dataAbertura,
        porte,
        logradouro,
        numero,
        complemento,
        cep,
        bairro,
        municipio,
        uf,
        email,
        telefone,
        polos} = req.body;
        
        const newEmpresa = await EmpresaModel({
        cnpj,
        codigoEmpresa: code,
        razaoSocial,
        nomeFantasia,
        atividadeEmpresarial,
        atividadeEconomica,
        naturezaJuridica,
        dataAbertura,
        porte,
        logradouro,
        numero,
        complemento,
        cep,
        bairro,
        municipio,
        uf,
        email,
        telefone,
        polos
    })
    try {
        
        const empresa = await newEmpresa.save()
        res.status(201).json({status: "Conecatdo", sucesso: true, data: empresa});
    } catch (e) {
        let error = errorFormater(e.message)
        res.status(400).json({status: "Não conectado", erros: error});
       
    }

}

//LISTANDO TODAS EMPRESAS CADASTRADAS INFORMAÇÕES DA EMPRESA
module.exports.findAllEmpresas = async (req, res) => {
    try {
        const getEmpresa = await EmpresaModel.find().sort({'_id': 'ASC'}).select('-__v')
        
        res.status(200).json({status: "Conectado", sucesso: true, data: getEmpresa})    
    } catch (e) {
        res.status(400).json({status: "Não conectado", erros: e});
    }
}

//LISTANDO UMA EMPRESA E INFORMAÇÕES
module.exports.findOneEmpresa = async (req, res) => {
    try {
        const {id, _id} = req.params;

        const getEmpresa = await EmpresaModel.findOne({codigoEmpresa: id, _id: _id})
        if(getEmpresa == null) return res.status(400).json({err: 'Empresa invalida'})
        if(getEmpresa.situacao == false) return res.status(401).json({err: 'Empresa encontrase DESATIVADA'})
        
        res.status(200).json({status: "Conectado", sucesso: true, data: getEmpresa})    
    } catch (e) {
        res.status(400).json({status: "Não conectado", erros: e});
    }
}

//ATUALIZANDO DADOS DA EMPRESA
module.exports.updateEmpresa = async (req, res) =>{
    const {id, _id} = req.params;

    const data = req.body
    const {
        cnpj,
        razaoSocial,
        nomeFantasia,
        atividadeEmpresarial,
        atividadeEconomica,
        naturezaJuridica,
        dataAbertura,
        porte,
        logradouro,
        numero,
        complemento,
        cep,
        bairro,
        municipio,
        uf,
        email,
        telefone,
        situacao

        } = data;

        try {
        
            
        const seachEmpresa = await EmpresaModel.findOne({codigoEmpresa: id, _id: _id})
        if(seachEmpresa.situacao == false) 
            return res.status(401).json({err: 'Empresa encontra-se DESATIVADA'})
        
        if(seachEmpresa == null) 
            return res.status(400).json({err: 'Empresa invalida'})
        
        
        const empresaUpdate = await EmpresaModel.findByIdAndUpdate(seachEmpresa._id, data, {new: true})
        res.status(200).json(empresaUpdate)
    } catch (e) {
        const err = e.keyValue
        const errKey = Object.keys(err)
        const errValue = Object.values(err)
        res.status(400).json({status: "Não conectado", erros: `${errKey.toString()} '${errValue}' já encontra-se cadastrado`});
    }
}

//ATIVANDO E DESATIVANDO EMPRESA
module.exports.patchEmpresa = async (req, res) =>{
    const {id, _id} = req.params;
    const {situacao} = req.body;

    try {

        const searchEmpresa = await EmpresaModel.findOne({codigoEmpresa: id, _id: _id})
        
        if(searchEmpresa == null) return res.status(400).json({err: 'Empresa invalida'})
        const empresaAtiva = await EmpresaModel.findByIdAndUpdate(
            {_id: searchEmpresa._id}, 
            {
                $set: {
                    situacao: situacao
                }

            },
            {
                new: true,
                omitUndefined: true
            }
        
        )

        res.status(200).json({data: `Atenção empresa ${empresaAtiva.codigoEmpresa} ${empresaAtiva.situacao == true ? 'ATIVADA' : 'DESATIVADA' } com sucesso.`})
    } catch (e) {
        res.status(400).json({status: "Não conectado", erros: e});
    }
}

//DELETANDO EMPRESA
module.exports.deleteEmpresa = async (req, res) =>{
    const {id, _id} = req.params;

    try {

        const searchEmpresa = await EmpresaModel.findOne({codigoEmpresa: id, _id: _id})
        if(searchEmpresa == null) return res.status(400).json({err: 'Empresa invalida'})
        if(searchEmpresa.situacao == false) return res.status(401).json({err: 'Empresa encontra-se DESATIVADA'})
        const empresaDelete = await EmpresaModel.findByIdAndRemove(searchEmpresa._id)

        res.status(200).json({data: `Atenção empresa ${searchEmpresa.codigoEmpresa} DELETADA com sucesso.`})
    } catch (e) {
        res.status(400).json({status: "Não conectado", erros: e});
    }
}


//ERRO 404 DA ROTA
module.exports.error404 = (req, res)=>{
    res.status(404).json({status: "Erro 404", sucesso: false})
}