<template>
  <div class="HeaderMain">
    <MenuToggleTelefone />
    <MenuToggleMain />
    <div class="w-100"></div>
    <LogoGrandMotors />
    <LogoToyota />
  </div>
</template>

<script>
import MenuToggleMain from '@/components/Menu/MenuToggleMain.container'
import MenuToggleTelefone from '@/components/Menu/MenuToggleTelefone'
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
</style>
