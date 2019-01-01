<template>
  <div class="ItemMenu" :class="{
    'ItemMenu--link': href
  }" @click="handleClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ItemMenu',

  props: {
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
      if (this.href) {
        window.location = this.href
      }
    }
  }
}
</script>ItemMenu__link

<style lang="scss">
.ItemMenu {
  color: $color-gray-darker;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $padding-top-item-menu $padding-left-item-menu;
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  transition: all .4s;

  &:hover {
    color: $color-primary-base;
  }
}

.ItemMenu--link {
  cursor: pointer;
}

.ItemMenu--submenu {
  background: $color-background-submenu;
  color: $color-white;

  &:hover {
    color: $color-white;
  }
}
</style>
