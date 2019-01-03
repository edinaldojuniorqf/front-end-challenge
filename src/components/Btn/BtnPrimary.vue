<template>
  <button class="BtnPrimary" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BtnPrimary',

  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.BtnPrimary {
  color:  $color-white;
  font-weight: $font-weight-bold;
  //box-shadow: 1px 2px 0px 0px rgba(171, 46, 67, 0.7), 2px 3px 6px 0px rgba(171, 46, 67, 0.7);
  background-color: $color-primary-base;
  border-radius: $border-radius;
  border: none;
  display: block;
  width: 100%;
  padding: $padding-wee $padding-small;
  font-size: $font-size-base;
  cursor: pointer;
  transition: all .3s;
  outline: none;

  &:hover {
    background-color: $color-primary-dark;
  }

  &:focus {
    outline: none;
  }
}
</style>
