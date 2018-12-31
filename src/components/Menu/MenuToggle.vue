<template>
  <div class="MenuToggle">
    <div @click="handleClick">
      <slot name="btn">
        <BtnMenuToggle
          :active="show" />
      </slot>
    </div>
    <b-collapse :id="'MenuToggle__collapse' + _uid" v-model="show" class="MenuToggle__collapse">
      <slot />
    </b-collapse>
  </div>
</template>

<script>
import BtnMenuToggle from '@/components/Btn/BtnMenuToggle'

export default {
  name: 'MenuToggle',

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    value (newValue) {
      this.show = newValue
    }
  },

  data () {
    return {
      show: false
    }
  },

  created () {
    this.show = this.value
  },

  components: {
    BtnMenuToggle
  },

  methods: {
    handleClick () {
      this.show = !this.show
      this.$emit('input', this.show)
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
