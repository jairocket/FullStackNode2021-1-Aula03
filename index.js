const inquirer = require('inquirer');
const { primeiraPergunta, adicionarTarefa, criarArquivo, criarCliente } = require('./questions');
const fs = require('fs');

inquirer.prompt(primeiraPergunta).then(respostas => {
  const opcao = respostas.opcao;

  if (opcao === 0) {
    inquirer.prompt(adicionarTarefa).then(tarefa => {
      console.log(tarefa);
    })
  }  

  if (opcao === 1) {
    inquirer.prompt(criarCliente).then(cliente => {
      console.log(cliente);      
    });    
  }

  if (opcao === 2) {
    inquirer.prompt(criarArquivo).then(arquivo => {      
      fs.writeFileSync(arquivo.nome, arquivo.texto);
    });
  }
});

