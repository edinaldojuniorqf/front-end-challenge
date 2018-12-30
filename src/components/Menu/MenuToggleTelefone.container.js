import { connect } from 'vuex-connect'
import MenuToggleTelefone from '@/components/Menu/MenuToggleTelefone'

export default connect({
  stateToProps: {
    items: state => state.menuTelefones
  },

  actionsToEvents: {
    setItems: 'setMenuTelefones'
  }
})(MenuToggleTelefone)
