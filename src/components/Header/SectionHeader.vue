<template>
  <div class="SectionHeader"
    :class="{
      'SectionHeader--backgroundImg': isMobile === true
    }">
    <VideoFull v-if="isMobile === false">
      <iframe slot="video" src="https://player.vimeo.com/video/202373809?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&muted=1&background=1" allow="autoplay" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      <SectionHeaderContent />
    </VideoFull>
    <SectionHeaderContent v-else-if="isMobile === true" />
  </div>
</template>

<script>
import VideoFull from '@/components/Header/VideoFull'
import SectionHeaderContent from '@/components/Header/SectionHeaderContent'

export default {
  name: 'SectionHeader',

  components: {
    VideoFull,
    SectionHeaderContent
  },

  data () {
    return {
      isMobile: null
    }
  },

  methods: {
    setBackground () {
      if (window.matchMedia(`(max-width: ${this.$style.sm})`).matches) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  },

  mounted () {
    this.setBackground()
    window.addEventListener('resize', () => {
      this.setBackground()
    })
  }
}
</script>

<style lang="scss" module>
:export {
  @each $breakpoint, $size in $grid-breakpoints {
    #{$breakpoint}: $size;
  }
}

.SectionHeader {
  .SectionHeader__container {
    margin-top: $margin-big;
    padding-bottom: $padding-extra;
  }
}

.SectionHeader--backgroundImg {
  background: url('../../assets/images/bg-video.png');
  background-size: cover;
}
</style>
