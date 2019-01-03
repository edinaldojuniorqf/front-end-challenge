<template>
  <div class="VideoFull">
    <div class="VideoFull_video">
      <slot name="video" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VideoFull',

  props: {
    gapHeight: {
      type: Number,
      default: 200 // folga de 200 caso o container cresça
    }
  },

  mounted () {
    this.setIframe()
    window.addEventListener('resize', this.setIframe)
  },

  methods: {
    setIframe () {
      let el = this.$el
      let iframe = el.getElementsByTagName('iframe')[0]

      let widthWrapper = el.offsetWidth
      let heightWrapper = el.offsetHeight + this.gapHeight
      let widthIframe = iframe.offsetWidth
      let heightIframe = iframe.offsetHeight

      let aspectRatio = heightIframe / widthIframe
      let aspectRatioWidth = widthIframe / heightIframe

      let newWidthIframe = widthWrapper
      let newHeightIframe = widthWrapper * aspectRatio

      if (newHeightIframe < heightWrapper) {
        newHeightIframe = heightWrapper
        newWidthIframe = heightWrapper * aspectRatioWidth
      }

      iframe.width = newWidthIframe
      iframe.height = newHeightIframe
    }
  }
}
</script>

<style lang="scss">
.VideoFull {
  position: relative;
  width: 100%;
  height: 100%;

  .VideoFull_video {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;

    iframe {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1; // se maior que -1 barra de rolagem não desce
    }
  }
}
</style>
