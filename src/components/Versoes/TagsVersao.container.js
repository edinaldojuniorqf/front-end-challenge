import { connect } from 'vuex-connect'
import TagsVersao from './TagsVersao'

export default connect({
  stateToProps: {
    tags: state => state.infoVersaoGeral.tags
  }
})(TagsVersao)
