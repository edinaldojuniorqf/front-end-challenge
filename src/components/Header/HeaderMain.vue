<template>
  <div class="HeaderMain">
    <MenuToggleTelefone />
    <MenuToggleMain class="d-lg-none" />
    <MenuNavMain />
    <div class="w-100 d-sm-none"></div>
    <LogoGrandMotors />
    <LogoToyota />
  </div>
</template>

<script>
import MenuToggleMain from '@/components/Menu/MenuToggleMain.container'
import MenuToggleTelefone from '@/components/Menu/MenuToggleTelefone.container'
import MenuNavMain from '@/components/Menu/MenuNavMain.container'
import LogoGrandMotors from '@/components/Header/LogoGrandMotors'
import LogoToyota from '@/components/Header/LogoToyota'

export default {
  name: 'HeaderMain',

  components: {
    MenuToggleMain,
    MenuToggleTelefone,
    MenuNavMain,
    LogoGrandMotors,
    LogoToyota
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

  .MenuNavMain {
    @include media-breakpoint-up(sm) {
      order: -9;
    }
  }

  .MenuToggleMain {
    @include media-breakpoint-up(sm) {
      order: -9;
    }
  }

  .LogoGrandMotors {
    @include media-breakpoint-down(xs) {
      margin-top: $margin-base;
    }

    @include media-breakpoint-up(sm) {
      order: -10;
    }
  }

  .LogoToyota {
    @include media-breakpoint-down(xs) {
      margin-top: $margin-base;
    }
  }
}
</style>
