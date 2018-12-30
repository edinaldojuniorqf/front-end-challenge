<template>
  <div class="HeaderMain">
    <MenuToggleTelefone class="HeaderMain__MenuToggleTelefone" />
    <MenuToggleMain class="HeaderMain__MenuToggleMain d-lg-none" />
    <div class="w-100 d-sm-none"></div>
    <LogoGrandMotors class="HeaderMain__LogoGrandMotors" />
    <LogoToyota class="HeaderMain__LogoToyota" />
  </div>
</template>

<script>
import MenuToggleMain from '@/components/Menu/MenuToggleMain.container'
import MenuToggleTelefone from '@/components/Menu/MenuToggleTelefone.container'
import LogoGrandMotors from '@/components/Header/LogoGrandMotors'
import LogoToyota from '@/components/Header/LogoToyota'

export default {
  name: 'HeaderMain',

  components: {
    MenuToggleMain,
    MenuToggleTelefone,
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
}

.HeaderMain__MenuToggleMain {
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
