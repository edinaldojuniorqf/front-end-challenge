<template>
  <div class="SectionHeader">
    <VideoFull>
      <iframe slot="video" src="https://player.vimeo.com/video/202373809?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1&background=1" allow="autoplay" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      <div class="container">
        <HeaderMain />
      </div>
      <div class="container SectionHeader__container">
        <div class="row">
          <div class="d-flex col-md-8 order-md-2">
            <HeaderContent />
          </div>
          <div class="col-md-4 order-md-1">
            <FormSimulacao />
          </div>
        </div>
      </div>
    </VideoFull>
  </div>
</template>

<script>
import HeaderMain from '@/components/Header/HeaderMain'
import VideoFull from '@/components/Header/VideoFull'
import HeaderContent from '@/components/Header/HeaderContent.container'
import FormSimulacao from '@/components/Form/FormSimulacao.container'

export default {
  name: 'SectionHeader',

  components: {
    HeaderMain,
    VideoFull,
    HeaderContent,
    FormSimulacao
  }
}
</script>

<style lang="scss">
.SectionHeader__container {
  margin-top: $margin-big;
  padding-bottom: $padding-extra;
}
</style>
