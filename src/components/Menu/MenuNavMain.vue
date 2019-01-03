<template>
  <div class="MenuNavMain">
    <MenuNav :items="items" :comps="comps" />
  </div>
</template>

<script>
import MenuNav from '@/components/Menu/MenuNav'
import ItemMenuVeiculo from '@/components/Menu/ItemMenuVeiculo.container'

export default {
  name: 'MenuNavMain',

  components: {
    MenuNav
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
      comps: {
        ItemMenuVeiculo
      }
    }
  }
}
</script>

<style>

</style>
