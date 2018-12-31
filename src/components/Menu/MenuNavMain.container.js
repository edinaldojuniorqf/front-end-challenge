import { connect } from 'vuex-connect'
import MenuNavMain from '@/components/Menu/MenuNavMain'

export default connect({
  stateToProps: {
    items: state => state.menu
  },

  actionsToEvents: {
    setItems: 'setMenu'
  }
})(MenuNavMain)
