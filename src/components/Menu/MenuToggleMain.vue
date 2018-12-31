<template>
  <MenuToggle class="MenuToggleMain">
    <MenuAccordion :items="items" :comps="comps" />
  </MenuToggle>
</template>

<script>
import MenuToggle from '@/components/Menu/MenuToggle'
import MenuAccordion from '@/components/Menu/MenuAccordion'
import ItemMenuVeiculo from '@/components/Menu/ItemMenuVeiculo'

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
      }
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
