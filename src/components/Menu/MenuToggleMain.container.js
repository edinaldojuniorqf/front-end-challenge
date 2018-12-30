import { connect } from 'vuex-connect'
import MenuToggleMain from '@/components/Menu/MenuToggleMain'

export default connect({
  stateToProps: {
    items: state => state.menu
  },

  actionsToEvents: {
    setItems: 'setMenu'
  }
})(MenuToggleMain)
