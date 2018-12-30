import menu from './db-fack/menu'
import menuTelefones from './db-fack/menuTelefones'

export default {
  setMenu ({commit}) {
    commit('SET_MENU', menu)
  },

  setMenuTelefones ({commit}) {
    commit('SET_MENU_TELEFONES', menuTelefones)
  }
}
