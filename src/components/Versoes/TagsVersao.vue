<template>
  <div class="TagsVersao">
    <h3 class="TagsVersao__title">Itens de série</h3>
    <VuePerfectScrollbar class="TagsVersao__scroll" :settings="settings">
      <template v-for="(tag, index) in tags">
        <span class="TagsVersao__label" :key="index">{{ tag }}</span>
      </template>
    </VuePerfectScrollbar>
  </div>
</template>

<script>
export default {
  name: 'TagsVersao',

  props: {
    tags: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3
      }
    }
  }
}
</script>

<style lang="scss">
.TagsVersao {

  .TagsVersao__title {
    font-size: 1rem (22 * $font-size-base);
    font-weight: $font-weight-light;
  }

  .TagsVersao__label {
    display: inline-block;
    border-radius: 20px;
    padding: 1px $padding-wee;
    background: $color-primary-base;
    margin: 0 3px $margin-wee 0;
    font-size: $font-size-small;
  }

  .TagsVersao__scroll {
    position: relative;
    max-height: 33px * 3;
  }
}
</style>
