export default {
  menu: [],
  menuTelefones: [],

  veiculo: {
    id: null,
    nome: null
  },

  // lista das versões do veículo selecionado
  versoes: [],

  // versão selecionada no formulário de simulação
  versao: {
    id: null,
    nome: null
  },

  // versão destaque da seção principal
  infoVersaoDestaque: {
    infoExtra: null,
    valor: null,
    valorDesconto: null
  },

  // versão ativa da seção com informações geral da versão
  infoVersaoGeral: {
    versao: {
      id: null,
      nome: null
    },
    imgDestaque: '',
    infoGeral: [],
    tags: []
  },
  
  veiculosCarousel: []
}