<template>
  <div class="BtnMenu" @click="handleClick">
    <i :class="icon" class="BtnMenu__icon"></i>
    <span class="BtnMenu__content">
      <slot />
    </span>
    <i class="fa fa-chevron-down BtnMenu__iconChevron" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'BtnMenu',

  props: {
    icon: {
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
.BtnMenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: $font-weight-semi-bold;
  padding: $padding-tiny $padding-small;
  cursor: pointer;

  .BtnMenu__icon {
    font-size: 1rem;
  }

  .BtnMenu__iconChevron {
    font-size: $font-size-small;
  }
}

.BtnMenu--border {
  border: 2px solid $color-white;
}

.BtnMenu__content {
  margin: 0 $margin-small 0 $margin-tiny;
}
</style>
