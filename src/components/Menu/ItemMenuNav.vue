<template>
  <ItemMenu
    class="ItemMenuNav"
    :class="{
      'ItemMenuNav--open': open,
      'ItemMenu--link': showIcon
    }"
    :href="href" :title="title">
    <slot />
    <i v-if="showIcon" 
      class="ItemMenuNav__icon fa fa-chevron-down"
      :class="{
        'ItemMenuNav__icon--open': open
      }"
      aria-hidden="true"></i>
  </ItemMenu>
</template>

<script>
import ItemMenu from '@/components/Menu/ItemMenu'

export default {
  name: 'ItemMenuNav',

  components: {
    ItemMenu
  },

  props: {
    open: {
      type: Boolean,
      default: false
    },

    showIcon: {
      type: Boolean,
      default: false
    },

    href: {
      type: String
    },

    title: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.ItemMenuNav {
  color: $color-white;

  &:hover {
    color: $color-white;
  }

  .ItemMenuNav__icon {
    transition: all .4s;
    margin-left: $padding-wee;
    font-size: $font-size-wee;
  }

  .ItemMenuNav__icon--open {
    transform: rotate(180deg);
  }
}

.ItemMenuNav--open {
  transition: color .4s;
}
</style>
