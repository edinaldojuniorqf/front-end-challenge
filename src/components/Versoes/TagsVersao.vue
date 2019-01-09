<template>
  <div class="TagsVersao">
    <h3 class="TagsVersao__title">Itens de série</h3>
    <div class="TagsVersao__scroll">
      <template v-for="(tag, index) in tags">
        <span class="TagsVersao__label" :key="index">{{ tag }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'

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

  mounted () {
    new PerfectScrollbar('.TagsVersao__scroll')
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
    max-height: 30px * 3;
  }
}
</style>
