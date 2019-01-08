<template>
  <div class="CarouselCarros">
    <carousel
      :per-page="perPage"
      :navigationEnabled="true"
      :navigationClickTargetSize="1"
      navigationNextLabel='>'
      navigationPrevLabel='<'
      paginationActiveColor="#b71d3e"
      paginationColor="#c6c6c6"
      :paginationSize="10">
      <slide>
        <img class="img-fluid" src="http://localhost:8080/images/carros/carro-classe-a.png" alt="Classe A">
        <h5 class="CarouselCarros__title">
          Classe A
        </h5>
      </slide>

      <slide>
        <img class="img-fluid" src="http://localhost:8080/images/carros/carro-classe-a.png" alt="Classe A">
        <h5 class="CarouselCarros__title">
          Classe A
        </h5>
      </slide>

      <slide>
        <img class="img-fluid" src="http://localhost:8080/images/carros/carro-classe-a.png" alt="Classe A">
        <h5 class="CarouselCarros__title">
          Classe A
        </h5>
      </slide>

      <slide>
        <img class="img-fluid" src="http://localhost:8080/images/carros/carro-classe-a.png" alt="Classe A">
        <h5 class="CarouselCarros__title">
          Classe A
        </h5>
      </slide>

      <slide>
        <img class="img-fluid" src="http://localhost:8080/images/carros/carro-classe-a.png" alt="Classe A">
        <h5 class="CarouselCarros__title">
          Classe A
        </h5>
      </slide>

      <slide>
        <img class="img-fluid" src="http://localhost:8080/images/carros/carro-classe-a.png" alt="Classe A">
        <h5 class="CarouselCarros__title">
          Classe A
        </h5>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselCarros',

  props: {
    perPage: {
      type: Number,
      default: 5
    }
  },

  mounted () {
  }
}
</script>

<style lang="scss">
.CarouselCarros {

  .CarouselCarros__title {
    font-weight: $font-weight-normal;
    $color: $color-gray-darker;
  }

  .VueCarousel-slide {
    text-align: center;
  }

  .VueCarousel-dot-container {
    margin-top: 0 !important;
  }

  .VueCarousel-navigation-button {
    background: rgba(0, 0, 0, .35) !important;
    color: $color-white !important;
    padding: 5px 10px !important;
    font-size: $font-size-wee;
  }
}
</style>
