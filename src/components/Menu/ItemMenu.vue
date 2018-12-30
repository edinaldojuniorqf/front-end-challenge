<template>
  <div class="ItemMenu" @click="handleClick">
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
</script>

<style lang="scss">
.ItemMenu {
  color: $color-gray-darker;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $padding-top-item-menu $padding-left-item-menu;
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  cursor: pointer;
  transition: all .4s;

  &:hover {
    color: $color-primary-base;
  }
}

.ItemMenu--submenu {
  background: $color-background-submenu;
  color: $color-white;

  &:hover {
    color: $color-white;
  }
}
</style>
