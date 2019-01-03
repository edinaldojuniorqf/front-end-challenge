import { connect } from 'vuex-connect'
import ItemMenuVeiculo from '@/components/Menu/ItemMenuVeiculo'

export default connect({
  actionsToEvents: {
    setVeiculo: 'setVeiculo'
  }
})(ItemMenuVeiculo)
