<template>
  <div class="ListVersao">
    <h3 class="ListVersao__title">Versões</h3>
    <ul class="ListVersao__list">
      <li v-for="versao in versoes" 
        :key="versao.id"
        class="ListVersao__item"
        :class="{
          'ListVersao__item--active': infoVersaoGeral.versao && (versao.id === infoVersaoGeral.versao.id)
        }"
        @click="handleItemClick(versao.id)">
        {{ versao.nome }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListVersao',

  props: {
    versoes: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            nome: 'Versão 1'
          },
          {
            id: 2,
            nome: 'Versão 2'
          }
        ]
      }
    },

    infoVersaoGeral: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  watch: {
    versoes (versoes) {
      this.$emit('setInfoVersaoGeral', versoes[0].id)
    }
  },

  methods: {
    handleItemClick (idVersao) {
      this.$emit('setInfoVersaoGeral', idVersao)
    }
  }
}
</script>

<style lang="scss">
.ListVersao {
  margin: $margin-extra 0;

  .ListVersao__title {
    text-align: right;
    font-weight: $font-weight-light;
    font-size: 1rem * (22 / $font-size-default);
    $margin-bottom: $margin-base;
  }

  .ListVersao__list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-weight: $font-weight-normal;
  }

  .ListVersao__item {
    color: rgba(255, 255, 255, .2);
    border-bottom: 1px solid rgba(121, 121, 121, .75);
    text-align: right;
    line-height: 37px;
    cursor: pointer;
  }

  .ListVersao__item--active {
    color: $color-white;
  }
}
</style>
