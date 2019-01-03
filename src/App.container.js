import { connect } from 'vuex-connect'
import App from './App'

export default connect({
  actionsToEvents: {
    setVeiculo: 'setVeiculo'
  }
})(App)
