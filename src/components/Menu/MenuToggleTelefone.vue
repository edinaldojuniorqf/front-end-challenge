<template>
  <div>
    <MenuToggle v-model="show">
      <BtnMenuTelefone slot="btn" @click="handleClick" />
      <MenuAccordion :items="items" />
    </MenuToggle>
  </div>
</template>

<script>
import MenuToggle from '@/components/Menu/MenuToggle'
import BtnMenuTelefone from '@/components/Btn/BtnMenuTelefone'
import MenuAccordion from '@/components/Menu/MenuAccordion'

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
      show: false
    }
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
