<template>
  <div class="HeaderMain">
    <MenuToggleTelefone class="HeaderMain__MenuToggleTelefone" />
    <MenuToggleMain class="HeaderMain__MenuToggleMain d-lg-none" />
    <MenuNav class="HeaderMain__MenuNav" :items="items" :comps="comps" />
    <div class="w-100 d-sm-none"></div>
    <LogoGrandMotors class="HeaderMain__LogoGrandMotors" />
    <LogoToyota class="HeaderMain__LogoToyota" />
  </div>
</template>

<script>
import MenuToggleMain from '@/components/Menu/MenuToggleMain.container'
import MenuToggleTelefone from '@/components/Menu/MenuToggleTelefone.container'
import MenuNav from '@/components/Menu/MenuNav'
import LogoGrandMotors from '@/components/Header/LogoGrandMotors'
import LogoToyota from '@/components/Header/LogoToyota'
import ItemMenuVeiculo from '@/components/Menu/ItemMenuVeiculo'

export default {
  name: 'HeaderMain',

  components: {
    MenuToggleMain,
    MenuToggleTelefone,
    MenuNav,
    LogoGrandMotors,
    LogoToyota
  },

  data () {
    return {
      comps: {
        ItemMenuVeiculo
      },
      
      items: [
        {
          title: 'NOSSOS VEÍCULO',
          items: [
            {
              title: 'ETIOS HATCH 2017',
              srcImg: 'http://localhost:8080/images/menu/model_thumb_etiooooss.png',
              href: 'http://google.com',
              comp: 'ItemMenuVeiculo'
            },
            {
              title: 'ETIOS SEDÃ 2017',
              srcImg: 'http://localhost:8080/images/menu/model_thumb_Comprar-Novo-Toyota-Etios-Sedan-X-1.5-Manual.png',
              href: 'http://google.com',
              comp: 'ItemMenuVeiculo'
            },
            {
              title: 'ETIOS CROSS 2017',
              srcImg: 'http://localhost:8080/images/menu/model_thumb_Comprar-Novo-Toyota-Etios-Cross-Manual.png',
              href: 'http://google.com',
              comp: 'ItemMenuVeiculo'
            },
            {
              title: 'COROLLA 2016',
              srcImg: 'http://localhost:8080/images/menu/model_thumb_corollaaaa.png',
              href: 'http://google.com',
              comp: 'ItemMenuVeiculo'
            },
            {
              title: 'HILUX CD DIESEL',
              srcImg: 'http://localhost:8080/images/menu/model_thumb_hiluuuuxxx.png',
              href: 'http://google.com',
              comp: 'ItemMenuVeiculo'
            }
          ]
        },
        {
          title: 'SERVIÇOS'
        },
        {
          title: 'VENDAS DIRETAS'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.HeaderMain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  position: relative;
}

.HeaderMain__MenuToggleMain {
  @include media-breakpoint-up(sm) {
    order: -9;
  }
}

.HeaderMain__MenuNav {
  @include media-breakpoint-up(sm) {
    order: -9;
  }
}

.HeaderMain__LogoGrandMotors {
  @include media-breakpoint-down(xs) {
    margin-top: $margin-base;
  }

  @include media-breakpoint-up(sm) {
    order: -10;
  }
}

.HeaderMain__LogoToyota {
  @include media-breakpoint-down(xs) {
    margin-top: $margin-base;
  }
}
</style>
