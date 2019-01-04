import { connect } from 'vuex-connect'
import HeaderContent from './HeaderContent'

export default connect({
  stateToProps: {
    veiculo: state => state.veiculo,
    versao: state => state.versao,
    infoVersaoDestaque: state => state.infoVersaoDestaque
  }
})(HeaderContent)
