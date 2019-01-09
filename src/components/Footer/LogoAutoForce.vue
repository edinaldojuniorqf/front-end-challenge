<template>
  <div class="LogoAutoForce">
    <img :src="ImgLogo" alt="Auto Force">
  </div>
</template>

<script>
import ImgLogo from '@/assets/images/autoforce.png'

export default {
  name: 'LogoAutoforce',

  data () {
    return {
      ImgLogo
    }
  }
}
</script>

<style>

</style>
