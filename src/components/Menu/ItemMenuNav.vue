<template>
  <ItemMenu
    class="ItemMenuNav"
    :class="{
      'ItemMenuNav--open': open,
      'ItemMenu--link': showIcon
    }"
    :href="href" :title="title"
    @click="handleClick">
    <slot />
    <font-awesome-icon 
      v-if="showIcon" 
      icon="angle-down"
      class="ItemMenuNav__icon"
      :class="{
        'ItemMenuNav__icon--open': open
      }" />
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
  },

  methods: {
    handleClick () {
      this.$emit('click')
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
    font-size: $font-size-base;
  }

  .ItemMenuNav__icon--open {
    transform: rotate(180deg);
  }
}

.ItemMenuNav--open {
  transition: color .4s;
}

.ItemMenuNav--submenu {
  color: $color-gray-darker;

  &:hover {
    color: $color-gray-darker;
  }
}
</style>
