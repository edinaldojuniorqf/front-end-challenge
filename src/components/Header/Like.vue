<template>
  <div class="Like fb-like" 
    :data-href="href" 
    :data-layout="layout" 
    :data-action="action"
    :data-size="size"
    :data-show-faces="showFaces"
    :data-share="share">
  </div>
</template>

<script>
export default {
  name: 'Like',

  props: {
    href: {
      type: String,
      default: 'https://github.com/autoforce/front-end-challenge'
    },

    layout: {
      type: String,
      default: 'button_count'
    },

    action: {
      type: String,
      default: 'like'
    },

    size: {
      type: String,
      default: 'small'
    },

    showFaces: {
      type: Boolean,
      default: false
    },

    share: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>
