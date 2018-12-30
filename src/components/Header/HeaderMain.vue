<template>
  <div class="HeaderMain">
    .
    <MenuToggleMain />
  </div>
</template>

<script>
import MenuToggleMain from '@/components/Menu/MenuToggleMain.container'

export default {
  name: 'HeaderMain',

  components: {
    MenuToggleMain
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
