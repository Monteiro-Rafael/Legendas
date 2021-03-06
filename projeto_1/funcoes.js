const fs = require('fs')
const path = require('path')


function lerDiretorio(caminho) {
    return new Promise((resolve, reject) =>{
        try {
            let arquivos = []
            arquivos = fs.readdirSync(caminho)    
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (e){
            reject(e)
        }
    })
}

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        try{
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch (e){
            reject(e)
        }
    })
}

function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function removerSimbolos(simbolos) {
    return function(array){
        return array.map(el => {
            let textoSemSimbolos = el
            simbolos.forEach(simbolo => {
                textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
            })
            return textoSemSimbolos
        })
    }
}


module.exports = {
    lerDiretorio, 
    lerArquivos,
    removerSimbolos
    
}