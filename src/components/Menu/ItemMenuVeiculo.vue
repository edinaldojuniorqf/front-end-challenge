<template>
  <ItemMenu class="ItemMenuVeiculo"
    :title="title"
    :href="href"
    @click="handleClick">
    <span>{{ title }}</span>
    <img class="ItemmenuVeiculo__img" :src="srcImg" :alt="title">
  </ItemMenu>
</template>

<script>
import ItemMenu from '@/components/Menu/ItemMenu'

export default {
  name: 'ItemMenuVeiculo',

  components: {
    ItemMenu
  },

  props: {
    title: {
      required: true,
      type: String
    },

    href: {
      type: String
    },

    srcImg: {
      required: true,
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
.ItemMenuVeiculo {
  font-weight: $font-weight-bold;

  .ItemmenuVeiculo__img {
    margin-left: $margin-base;  
  }

  &:hover {
    .ItemmenuVeiculo__img {
      transform: translateX(-10px);
      transition: all 0.1s;
    }
  }
}
</style>
