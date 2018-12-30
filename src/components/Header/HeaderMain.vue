<template>
  <div class="HeaderMain">
    .
    <MenuToggle>
      <MenuAccordion :items="items" />
    </MenuToggle>
  </div>
</template>

<script>
import MenuToggle from '@/components/Menu/MenuToggle'
import MenuAccordion from '@/components/Menu/MenuAccordion'
import ItemMenuVeiculo from '@/components/Menu/ItemMenuVeiculo'

export default {
  name: 'HeaderMain',

  components: {
    MenuToggle,
    MenuAccordion
  },

  props: {
    items: {
      type: Array,
      default () {
        return [
          {
            title: 'NOSSO VEÍCULOS',
            items: [
              {
                props: {
                  title: 'ETIOS HATCH 2017',
                  href: 'http://google.com',
                  srcImg: 'http://localhost:8080/images/header/model_thumb_etiooooss.png',
                  class: 'ItemMenuVeiculo--submenu'
                },
                is: ItemMenuVeiculo
              },
              {
                props: {
                  title: 'ETIOS SEDÃ 2017',
                  srcImg: 'http://localhost:8080/images/header/model_thumb_Comprar-Novo-Toyota-Etios-Sedan-X-1.5-Manual.png',
                  class: 'ItemMenuVeiculo--submenu'
                },
                is: ItemMenuVeiculo
              }
            ]
          },
          {
            title: 'SERVIÇOS',
            href: 'http://google.com'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.HeaderMain {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  position: relative;
}
</style>
