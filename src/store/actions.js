import menu from './db-fake/menu'
import menuTelefones from './db-fake/menuTelefones'
import veiculos from './db-fake/veiculos'
import versoes from './db-fake/versoes'

export default {
  setMenu ({commit}) {
    commit('SET_MENU', menu)
  },

  setMenuTelefones ({commit}) {
    commit('SET_MENU_TELEFONES', menuTelefones)
  },

  /* Seta veiculo passado id ou slug */
  setVeiculo ({state, commit, dispatch}, idSlug) {
    let veiculo = veiculos.find(item => {
      return item.id === idSlug || item.slug === idSlug
    })

    if (veiculo) {
      commit('SET_VEICULO', {
        id: veiculo.id,
        nome: veiculo.nome
      })

      dispatch('setVersoes', state.veiculo.id)
    }
  },

  setVersoes ({commit}, idVeiculo) {
    let versoesVeiculo = versoes.filter(item => {
      return item.veiculo.id === idVeiculo
    })

    commit('SET_VERSOES', versoesVeiculo)
    commit('SET_VERSAO', versoesVeiculo[0])
  }
}
