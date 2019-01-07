import { connect } from 'vuex-connect'
import ImgVersaoGeral from './ImgVersaoGeral'

export default connect({
  stateToProps: {
    src: state => state.infoVersaoGeral.imgDestaque,
    alt: state => state.infoVersaoGeral.versao.nome
  }
})(ImgVersaoGeral)
