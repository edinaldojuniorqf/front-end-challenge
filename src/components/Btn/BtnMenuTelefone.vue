<template>
  <div>
    <BtnMenu class="BtnMenu--border" icon="fa fa-phone" @click="handleClick">
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

  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
