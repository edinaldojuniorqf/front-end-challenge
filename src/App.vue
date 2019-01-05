<template>
  <div id="app">
    <SectionHeader />
    <SectionChamadas />
  </div>
</template>

<script>
import SectionHeader from '@/components/Header/SectionHeader'
import SectionChamadas from '@/components/Chamadas/SectionChamadas'

export default {
  name: 'app',

  components: {
    SectionHeader,
    SectionChamadas
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
