const funcoes = require('./funcoes')
const path = require('path')

let caminho = path.join(__dirname, '..')

funcoes.lerDiretorio(caminho)
    .then(arquivo => arquivo.filter(item => item.includes('.srt'))) // Seleciona todos os arquivos SRT da pasta
    .then(arquivosSRT => funcoes.lerArquivos(arquivosSRT)) // Lê os arquivos selecionados
    .then(conteudos => conteudos.join('')) 
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => linhas.filter(texto => !texto.includes('\r'))) // tira todos os \r 
    .then(texto => texto.filter(linha => !linha.includes('-->'))) // tira todos os elementos que contem -->
    .then(texto => texto.filter(el => el.trim())) // tira todos os espaços
    .then(texto => texto.filter(el => parseInt(el)!==parseInt(el))) // tira todas as linhas que contem apenas numeros (NaN !== NaN)
     
    .then(console.log)

