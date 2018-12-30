<template>
  <div class="MenuToggle">
    <slot name="btn">
      <BtnMenuToggle
        :active="show"
        @click="handleClick" />
    </slot>
    <b-collapse :id="'MenuToggle__collapse' + _uid" v-model="show" class="MenuToggle__collapse">
      <slot />
    </b-collapse>
  </div>
</template>

<script>
import BtnMenuToggle from './BtnMenuToggle'

export default {
  name: 'MenuToggle',

  data () {
    return {
      show: false
    }
  },

  components: {
    BtnMenuToggle
  },

  methods: {
    handleClick () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
.MenuToggle__collapse {
  position: absolute;
  left: 0;
  background: #fff;
  width: 100%;
  padding: $padding-tiny 0;
  margin: $margin-small 0;
  border-radius: $border-radius;
  box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.75);
}
</style>
