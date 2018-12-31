<template>
  <div class="LogoGrandMotors">
    <img :src="ImgLogo" alt="Grand Motors">
  </div>
</template>

<script>
import ImgLogo from '@/assets/images/logo_Logo-Grand-Motors.png'

export default {
  name: 'LogoGrandMotors',

  data () {
    return {
      ImgLogo
    }
  }
}
</script>

<style>

</style>
