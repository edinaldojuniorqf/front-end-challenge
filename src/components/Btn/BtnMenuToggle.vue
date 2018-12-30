<template>
  <a href="#" class="BtnMenuToggle"
    :class="{
      'BtnMenuToggle--active': active
    }"
    @click.prevent="handleClick">
    <span class="BtnMenuToggle__icon BtnMenuToggle__icon--top"></span>
    <span class="BtnMenuToggle__icon BtnMenuToggle__icon--middle"></span>
    <span class="BtnMenuToggle__icon BtnMenuToggle__icon--bottom"></span>
  </a>
</template>

<script>
export default {
  name: 'BtnMenuToggle',

  props: {
    active: {
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
$icon-height: 3px;
$icon-space: 3;

.BtnMenuToggle {
  position: relative;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
}

.BtnMenuToggle--active {
  .BtnMenuToggle__icon {
    margin-top: 0;
  }
  .BtnMenuToggle__icon--top {
    transform: rotate(45deg);
  }

  .BtnMenuToggle__icon--middle {
    background: transparent;
  }

  .BtnMenuToggle__icon--bottom {
    transform: rotate(-45deg);
  }
}

.BtnMenuToggle__icon {
  position: absolute;
  border-radius: 1px;
  display: block;
  height: $icon-height;
  width: 100%;
  background: $color-white;
  transition: all .4s ease-in-out;
}

.BtnMenuToggle__icon--top {
  margin-top: -$icon-height * $icon-space;
}

.BtnMenuToggle__icon--bottom {
  margin-top: $icon-height * $icon-space;
}
</style>
