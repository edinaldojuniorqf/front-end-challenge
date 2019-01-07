import { connect } from 'vuex-connect'
import InfoGeralVersao from './InfoGeralVersao'

export default connect({
  stateToProps: {
    infoGeral: state => state.infoVersaoGeral.infoGeral
  }
})(InfoGeralVersao)
