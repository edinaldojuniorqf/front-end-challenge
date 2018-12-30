<template>
  <div>
    <img :src="ImgLogo" alt="Toyota">
  </div>
</template>

<script>
import ImgLogo from '@/assets/images/logo_brand_horizontal_10.png'

export default {
  name: 'LogoToyta',

  data () {
    return {
      ImgLogo
    }
  }
}
</script>

<style>

</style>
