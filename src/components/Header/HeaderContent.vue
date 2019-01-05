<template>
  <div class="HeaderContent">
    <div class="HeaderContent__content">
      <h1 class="HeaderContent__title">
        {{ veiculo.nome }}
      </h1>
      <h2 class="HeaderContent__subtitle">
        {{ versao.nome }}
      </h2>
      <h3 class="HeaderContent__desc">
        {{ infoVersaoDestaque.infoExtra }}
      </h3>

      <h2 class="HeaderContent__de" v-if="infoVersaoDestaque.valorDesconto">
        de 
        <span class="HeaderContent__valorDe">{{ infoVersaoDestaque.valor | currency('R$ ', 2, { decimalSeparator: ',', thousandsSeparator: '.' }) }}</span>
      </h2>
      <h1 class="HeaderContent__por">
        <template v-if="infoVersaoDestaque.valorDesconto">por </template>
        {{ infoVersaoDestaque.valorDesconto ? infoVersaoDestaque.valorDesconto : infoVersaoDestaque.valor | currency('R$ ', 2, { decimalSeparator: ',', thousandsSeparator: '.' }) }}
      </h1>
      <small class="HeaderContent__info">*Consulte as Condições Comerciais.</small>
    </div>
    <div class="HeaderContent__footer">
      <div class="HeaderContent__titleLike">Gostou? Então compartilhe.</div>
      <Like />
      <small>
        *Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versões.
        Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificados sem aviso prévio. Consulte e
        confirme todas as informações com um de nossos vendedores.
      </small>
    </div>
  </div>
</template>

<script>
import Like from '@/components/Header/Like'

export default {
  name: 'HeaderContent',

  components: {
    Like
  },

  props: {
    veiculo: {
      type: Object,
      default () {
        return {}
      }
    },

    versao: {
      type: Object,
      default () {
        return {}
      }
    },

    infoVersaoDestaque: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.HeaderContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  flex: 1;

  @include media-breakpoint-up(md) {
    text-align: left;
  }

  .HeaderContent__title {
    font-size: $font-size-h1;
    font-weight: $font-weight-bold;
    margin: 0;
  }

  .HeaderContent__subtitle {
    font-size: 1rem * (22 / $font-size-default);
    font-weight: $font-weight-bold;
    margin: 0 0 $margin-base;
  }

  .HeaderContent__desc {
    font-size: 1rem * (18 / $font-size-default);
    font-weight: $font-weight-semi-bold;
    margin: 0 0 55px;
  }

  .HeaderContent__de {
    font-size: 1rem * (18 / $font-size-default);
    font-weight: $font-weight-semi-bold;
    margin: 0;

    .HeaderContent__valorDe {
      text-decoration: line-through;
    }
  }

  .HeaderContent__por {
    font-size: 1rem * (32 / $font-size-default);
    font-weight: $font-weight-semi-bold;
    margin: 0;
  }

  .HeaderContent__info {
    font-size: 1rem * (10 / $font-size-default);
    font-weight: $font-weight-semi-bold;
    margin: 0 0 $margin-base;
  }

  .HeaderContent__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: $padding-wee;
    margin-top: $margin-big;

    .HeaderContent__titleLike {
      font-size: $font-size-small;
    }

    .Like {
      margin: $margin-wee 0 $margin-small 0;
    }

    small {
      font-size: $font-size-wee;
    }
  }
}
</style>
