import { connect } from 'vuex-connect'
import CarouseCarros from './CarouselCarros'

export default connect({
  stateToProps: {
    slides: state => state.veiculosCarousel
  },

  actionsToEvents: {
    setSlides: 'setVeiculosCarousel'
  }
})(CarouseCarros)
