<template>
  <ItemMenu class="ItemMenuAccordion"
    :class="{
      'ItemMenuAccordion--open': open
    }">
    <slot />
    <i class="ItemMenuAccordion__icon fa fa-chevron-down"
    :class="{
      'ItemMenuAccordion__icon--open': open
    }" aria-hidden="true"></i>
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
  
}

.ItemMenuAccordion__icon {
  transition: all .4s;
}

.ItemMenuAccordion--open {
  color: $color-primary-base;
  transition: color .4s;
}

.ItemMenuAccordion__icon--open {
  transform: rotate(180deg);
}
</style>
