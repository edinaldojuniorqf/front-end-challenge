<template>
  <div class="InfoGeralVersao">
    <h1 class="InfoGeralVersao__title">Informações Gerais</h1>

    <VuePerfectScrollbar class="InfoGeralVersao__scroll" :settings="settings">
      <table class="InfoGeralVersao__table">
        <tr v-for="(i, index) in infoGeral"
          :key="index">
          <th>{{ i.key }}</th>
          <td>{{ i.value }}</td>
        </tr>
      </table>
    </VuePerfectScrollbar>

  </div>
</template>

<script>
export default {
  name: 'InfoGeralVersao',

  props: {
    infoGeral: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3
      }
    }
  }
}
</script>

<style lang="scss">
.InfoGeralVersao {
  background: rgba(42, 42, 42, .75);
  padding: $padding-extra $padding-small;

  .InfoGeralVersao__title {
    color: $color-white;
    font-size: 1rem * (22 / $font-size-default);
    font-weight: $font-weight-light;
    margin: 0 0 $margin-wee 0;
  }

  .InfoGeralVersao__table {
    width: 100%;

    tr {
      &:nth-child(odd) {
        background: rgba(54, 54, 54, .75);
      }

      th, td {
        padding: $padding-wee;
        font-size: $font-size-small;
      }

      th {
        font-weight: normal;
        color: #797979;
      }

      td {
        color: $color-primary-light;
      }
    }
  }

  .InfoGeralVersao__scroll {
    position: relative;
    max-height: 266px;
  }
}
</style>
