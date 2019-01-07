<template>
  <div class="TagsVersao">
    <h3 class="TagsVersao__title">Itens de série</h3>
    <template v-for="tag in tags">
      <span class="TagsVersao__label" :key="tag">{{ tag }}</span>
    </template>
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
  }
}
</style>
