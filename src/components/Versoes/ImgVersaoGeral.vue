<template>
  <div class="ImgVersaoGeral">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'ImgVersaoGeral',

  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.ImgVersaoGeral {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
