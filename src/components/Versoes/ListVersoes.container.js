import { connect } from 'vuex-connect'
import ListVersoes from './ListVersoes'

export default connect({
  stateToProps: {
    versoes: state => state.versoes,
    infoVersaoGeral: state => state.infoVersaoGeral
  },

  actionsToEvents: {
    setInfoVersaoGeral: 'setInfoVersaoGeral'
  }
})(ListVersoes)
