const primeiraPergunta = [
  {
    type: 'list',
    name: 'opcao',
    message: 'O que você quer fazer?',
    required: true,
    choices: [
      {
        name: 'Criar uma tarefa',
        value: 0,
      },
      {
        name: 'Criar um cliente',
        value: 1,
      },        
      {
        name: 'Criar um arquivo',
        value: 2,
      },        
    ]
  }
]

const adicionarTarefa = [
  {
    type: 'input',
    name: 'descricao',
    message: 'Qual é a sua tarefa?',
    required: true,    
  },
  {
    type: 'list',
    name: 'status',
    message: 'Qual o status da sua tarefa?',
    required: true,
    choices: [
      'Pendente',
      'Feito',
    ]
  }
]

const criarCliente = [
  {
    type: 'input',
    name: 'nome',
    message: 'Qual é o nome do cliente?',
    required: true,
  }
]

const criarArquivo = [
  {
    type: 'input',
    name: 'nome',
    message: 'Qual é o nome do arquivo?',
    required: true,
  },
  {
    type: 'input',
    name: 'texto',
    message: 'Digite um texto para o arquivo',
    required: true,
  }
]

module.exports = {
  primeiraPergunta,
  adicionarTarefa,
  criarCliente,
  criarArquivo,
}