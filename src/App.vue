<template>
  <div id="app">
    <SectionHeader />
  </div>
</template>

<script>
import SectionHeader from '@/components/Header/SectionHeader'

export default {
  name: 'app',

  components: {
    SectionHeader
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
