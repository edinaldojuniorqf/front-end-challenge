import menu from './db-fake/menu'
import menuTelefones from './db-fake/menuTelefones'

export default {
  setMenu ({commit}) {
    commit('SET_MENU', menu)
  },

  setMenuTelefones ({commit}) {
    commit('SET_MENU_TELEFONES', menuTelefones)
  }
}
