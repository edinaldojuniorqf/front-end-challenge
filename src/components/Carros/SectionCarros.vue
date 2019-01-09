<template>
  <div class="SectionCarros">
    <div class="container">
      <h3 class="SectionCarros__title">Conheça nossos carros</h3>
      <CarouselCarros :perPage="perPage" :navigationEnabled="navigationEnabled" />
    </div>
  </div>
</template>

<script>
import CarouselCarros from '@/components/Carros/CarouselCarros.container'

export default {
  name: 'SectionCarros',

  components: {
    CarouselCarros
  },

  data () {
    return {
      perPage: 5,
      navigationEnabled: false
    }
  },

  methods: {
    setPerPage () {
      if (window.matchMedia(`(max-width: ${this.$style.md})`).matches) {
        this.perPage = 3
        this.navigationEnabled = false
      } else {
        this.perPage = 5
        this.navigationEnabled = true
      }
    }
  },

  mounted () {
    this.setPerPage()

    window.addEventListener('resize', () => {
      this.setPerPage()
    })
  }
}
</script>

<style lang="scss" module>
</style>

<style lang="scss">
.SectionCarros {
  background: $color-white;  
  padding: $padding-big 0;
  color: $color-gray-darker;

  .SectionCarros__title {
    font-size: 1rem * (32 / $font-size-base);
    font-weight: $font-weight-light;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: $margin-big;

    &::after {
      content: '';
      background: rgba(55, 52, 53, .3);
      width: 100px;
      height: 1px;
      margin-top: $margin-small;
    }
  }
}
</style>
