<template>
  <div class="ItemChamada">
    <h3>{{ titleSecondary }}</h3>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemChamada',

  props: {
    title: {
      type: String
    },

    titleSecondary: {
      type: String
    },

    text: {
      type: String
    }
  }
}
</script>

<style lang="scss">
$border-item-chamada: 1px solid #5a3740;

.ItemChamada {
  text-align: center;
  padding: $padding-extra $padding-base $padding-big;
  border-bottom: $border-item-chamada;
  flex: 1;

  @include media-breakpoint-up('md') {
    border: none;
    border-right: $border-item-chamada;
  }

  h3 {
    color: $color-white;
    font-weight: $font-weight-light;
    margin: 0;
  }

  h2 {
    font-weight: $font-weight-normal;
    color: $color-primary-light;
  }
}

.ItemChamada--noBorder {
  border: none;
}
</style>
