<template>
  <div class="NavFooter">
    <a href="#">Visitar site</a>
    <a href="#">Contato</a>
    <a href="#">Política de privacidade</a>
  </div>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="scss">
.NavFooter {
  display: flex;

  a {
    margin: $margin-tiny $margin-wee;
  }
}
</style>
