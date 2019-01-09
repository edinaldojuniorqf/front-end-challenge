<template>
  <div class="CarouselCarros">
    <carousel
      :per-page="perPage"
      :navigationEnabled="navigationEnabled"
      :navigationClickTargetSize="1"
      navigationNextLabel="&#10095;"
      navigationPrevLabel="&#10094;"
      :paginationActiveColor="$style['color-primary-base']"
      :paginationColor="$style['color-gray']"
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
    },

    navigationEnabled: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" module>
:export {
  color-primary-base: $color-primary-base;
  color-gray: $color-gray;
}
</style>

<style lang="scss">
.CarouselCarros {

  .CarouselCarros__title {
    font-weight: $font-weight-normal;
    $color: $color-gray-darker;
  }

  .VueCarousel {
    .VueCarousel-wrapper {
      &:hover {
        .VueCarousel-slide {
          opacity: .5;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

}
</style>
