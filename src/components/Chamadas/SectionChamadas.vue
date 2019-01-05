<template>
  <div class="SectionChamadas">
    <div class="container">
      <ItemChamada 
        title="TAXA ZERO %" 
        titleSecondary="Imperdível"
        text="Always first off the line. Instant torque delivers full power in a heartbeat." />

      <ItemChamada 
        title="SEGURO"
        titleSecondary="O carro mais"
        text="Always first off the line. Instant torque." />

      <ItemChamada 
        class="ItemChamada--noBorder"
        title="R$ 3 mill"
        titleSecondary="Bonús de até"
        text="Always first off the line. Instant torque delivers full power in a heartbeat." />
    </div>
  </div>
</template>

<script>
import ItemChamada from '@/components/Chamadas/ItemChamada'

export default {
  name: 'SectionChamadas',

  components: {
    ItemChamada
  }
}
</script>

<style lang="scss">
.SectionChamadas {
  background: $color-primary-dark;
  padding: $padding-wee 0 $padding-base 0;
  
  @include media-breakpoint-up('md') {
    .container {
      display: flex;
    }
  }
}
</style>
