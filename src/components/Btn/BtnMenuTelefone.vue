<template>
  <div>
    <BtnMenu 
      class="BtnMenu--border"
      icon="phone"
      iconFlip="horizontal"
      :showIcon="true"
      :open="open"
      @click="handleClick">
      TELEFONES
    </BtnMenu>
  </div>
</template>

<script>
import BtnMenu from '@/components/Btn/BtnMenu'

export default {
  name: 'BtnMenuTelefone',

  components: {
    BtnMenu
  },

  props: {
    open: {
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

<style>

</style>
