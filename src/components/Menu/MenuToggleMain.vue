<template>
  <MenuToggle class="MenuToggleMain" v-model="open">
    <MenuAccordion :items="items" :comps="comps" @close="handleClose" />
  </MenuToggle>
</template>

<script>
import MenuToggle from '@/components/Menu/MenuToggle'
import MenuAccordion from '@/components/Menu/MenuAccordion'
import ItemMenuVeiculo from '@/components/Menu/ItemMenuVeiculo.container'

export default {
  name: 'MenuToggleAccordion',

  components: {
    MenuToggle,
    MenuAccordion
  },

  data () {
    return {
      comps: {
        ItemMenuVeiculo
      },
      open: false
    }
  },

  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },

  created () {
    this.$emit('setItems')
  },

  methods: {
    handleClose () {
      this.open = false
    }
  }
}
</script>

<style lang="scss">
.MenuToggleMain {
  .MenuToggle__collapse {
    width: 100%;
  }
}
</style>
