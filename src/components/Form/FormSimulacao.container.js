import { connect } from 'vuex-connect'
import FormSimulacao from './FormSimulacao'

export default connect({
  stateToProps: {
    versoes: state => state.versoes,
    versao: state => state.versao
  },

  mutationsToEvents: {
    setVersao: 'SET_VERSAO'
  },

  actionsToEvents: {
    setInfoVersaoDestaque: 'setInfoVersaoDestaque'
  }
})(FormSimulacao)
