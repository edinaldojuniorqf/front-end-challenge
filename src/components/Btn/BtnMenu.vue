<template>
  <div class="BtnMenu"
    :class="{
      'BtnMenu--open': open
    }"
    @click="handleClick">
    <font-awesome-icon :icon="icon" size="sm" />
    <span class="BtnMenu__content">
      <slot />
    </span>
    
    <i v-if="showIcon" class="BtnMenu__iconChevron fa fa-chevron-down"
    :class="{
      'BtnMenu__iconChevron--open': open
    }" aria-hidden="true"></i>

    <font-awesome-icon v-if="showIcon" 
      class="BtnMenu__iconChevron"
      :class="{
        'BtnMenu__iconChevron--open': open
      }"
      icon="angle-down" />
  </div>
</template>

<script>
export default {
  name: 'BtnMenu',

  props: {
    icon: {
      type: String
    },

    open: {
      type: Boolean,
      default: false
    },

    showIcon: {
      type: Boolean,
      default: false
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

  .BtnMenu__iconChevron {
    transition: all .4s;
    font-size: $font-size-base;
  }

  .BtnMenu__iconChevron--open {
    transform: rotate(180deg);
  }

}

.BtnMenu--open {
  transition: color .4s;
}

.BtnMenu--border {
  border: 2px solid $color-white;
}

.BtnMenu__content {
  margin: 0 $margin-small 0 $margin-tiny;
}
</style>
