import menu from './db-fack/menu'

export default {
  setMenu ({commit}) {
    commit('SET_MENU', menu)
  }
}
