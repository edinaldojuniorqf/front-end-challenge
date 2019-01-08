<template>
  <div id="app">
    <SectionHeader />
    <SectionChamadas />
    <SectionVersoes />
    <SectionCarros />
    <SectionFooter />
  </div>
</template>

<script>
import SectionHeader from '@/components/Header/SectionHeader'
import SectionChamadas from '@/components/Chamadas/SectionChamadas'
import SectionVersoes from '@/components/Versoes/SectionVersoes'
import SectionCarros from '@/components/Carros/SectionCarros'
import SectionFooter from '@/components/Footer/SectionFooter'

export default {
  name: 'app',

  components: {
    SectionHeader,
    SectionChamadas,
    SectionVersoes,
    SectionCarros,
    SectionFooter
  },

  mounted () {
    // seta o veículo padrão
    this.$emit('setVeiculo', 'etios-hatch-2017')
  }
}
</script>

<style lang="scss">
body {
  background: $color-background-base;
}

#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>
