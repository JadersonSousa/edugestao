module.exports.errorFormater = e =>{
    const erros = {}
    const allErros = e.substring(e.indexOf(':')+1).trim()
    const allErrosArray = allErros.split(',').map(e => e.trim())
 


    allErrosArray.forEach(error => {
        if(error.includes("test.empresas")){
            const errDupli = error.split(':').map(err=> err.trim())
            const e = errDupli[3].split('}')
            
            erros["duplicado"] = e[0].replace(/[\""]/, "").trim().slice(0, -1)
        
        }else {
            const [key, value] = error.split(':').map(err=> err.trim())
            erros[key] = value
            
            
        }
        
    });

    
    return erros
}