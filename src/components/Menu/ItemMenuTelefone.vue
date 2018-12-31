<template>
  <ItemMenu class="ItemMenuTelefone ItemMenu--submenu"
    :title="title"
    :href="href"
    @click="handleClick">
      <span>
        <span class="ItemMenuTelefone__title">{{ title }}</span>
        <span class="ItemMenuTelefone__setor" v-if="setor">
          &nbsp; | {{ setor }}
        </span>
      </span>
  </ItemMenu>
</template>

<script>
import ItemMenu from '@/components/Menu/ItemMenu'

export default {
  name: 'ItemMenuTelefone',

  components: {
    ItemMenu
  },

  props: {
    title: {
      required: true,
      type: String
    },

    setor: {
      type: String,
      default: ''
    },

    href: {
      type: String
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
.ItemMenuTelefone__title {
  font-weight: $font-weight-bold;
}

.ItemMenuTelefone__setor {
  font-weight: $font-weight-light;
}
</style>
