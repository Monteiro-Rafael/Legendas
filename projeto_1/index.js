const funcoes = require('./funcoes')
const path = require('path')

let caminho = path.join(__dirname, '..')

funcoes.lerDiretorio(caminho)
    .then(arquivo => arquivo.filter(item => item.includes('.srt')))
    .then(arquivosSRT => funcoes.lerArquivos(arquivosSRT))
    .then(console.log)

