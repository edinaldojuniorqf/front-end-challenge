<template>
  <ItemMenu class="ItemMenuAccordion"
    :class="{
      'ItemMenuAccordion--open': open
    }">
    <slot />

    <font-awesome-icon class="ItemMenuAccordion__icon"
      :class="{
        'ItemMenuAccordion__icon--open': open
      }"
      icon="angle-down" size="lg" />

  </ItemMenu>
</template>

<script>
import ItemMenu from './ItemMenu'

export default {
  name: 'ItemMenuAccordion',

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  components: {
    ItemMenu
  }
}
</script>

<style lang="scss">
.ItemMenuAccordion {
  cursor: pointer;
}

.ItemMenuAccordion__icon {
  transition: all .4s;
  margin-left: $margin-small;
}

.ItemMenuAccordion--open {
  color: $color-primary-base;
  transition: color .4s;
}

.ItemMenuAccordion__icon--open {
  transform: rotate(180deg);
}
</style>
