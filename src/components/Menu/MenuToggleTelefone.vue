<template>
  <div>
    <MenuToggle v-model="show">
      <BtnMenuTelefone slot="btn" @click="handleClick" />
      <MenuAccordion :items="items" :comps="comps" />
    </MenuToggle>
  </div>
</template>

<script>
import MenuToggle from '@/components/Menu/MenuToggle'
import BtnMenuTelefone from '@/components/Btn/BtnMenuTelefone'
import MenuAccordion from '@/components/Menu/MenuAccordion'
import ItemMenuTelefone from '@/components/Menu/ItemMenuTelefone'
import ItemMenuVeiculo from '@/components/Menu/ItemMenuVeiculo'

export default {
  name: 'MenuToggleTelefone',

  components: {
    MenuToggle,
    BtnMenuTelefone,
    MenuAccordion
  },

  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      show: false,
      comps: {
        ItemMenuTelefone,
        ItemMenuVeiculo
      }
    }
  },

  created () {
    this.$emit('setItems')
  },

  methods: {
    handleClick () {
      this.show = !this.show
    }
  }
}
</script>

<style>

</style>
