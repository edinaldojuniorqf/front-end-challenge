<template>
  <div class="FormSimulacao">
    <h4 class="FormSimulacao__title">SIMULAR FINANCIAMENTO</h4>
    <h6 class="FormSimulacao_subtitle">Escolha a parcela que cabe no seu bolso</h6>
    
    <form>
      <label for="FormSimulacao__versao">Escolha uma versão</label>
      <v-select inputId="FormSimulacao__versao"
        v-model="simulacao.versao"
        :options="versions"
        :value="{value: 1, text: '1.8L DUAL VVT-1 16V'}"
        label="text"
        :clearable="false"
        :searchable="false">
        <template slot="option" slot-scope="option">
          {{ option.text }}
        </template>
      </v-select>

      <hr class="FormSimulacao__hr" />

      <input class="FormSimulacao__input"
        v-model="simulacao.nome"
        type="text"
        placeholder="Nome*"
        maxlength="255">
      
      <input class="FormSimulacao__input"
        v-model="simulacao.email"
        type="text"
        placeholder="E-mail*"
        maxlength="255">

      <input class="FormSimulacao__input"
        v-model="simulacao.telefone"
        type="text"
        placeholder="Telefone*"
        v-mask="[masks.telefone, masks.celular]">

      <label>Número de parcelas*</label>
      <div class="FormSimulacao__radio">
        <RadioCustom name="version"
          v-model="simulacao.nParcelas"
          valueDefalut="12">
          12
        </RadioCustom>
        <RadioCustom name="version"
          v-model="simulacao.nParcelas"
          valueDefalut="24">
          24
        </RadioCustom>
        <RadioCustom name="version"
          v-model="simulacao.nParcelas"
          valueDefalut="36">
          36
        </RadioCustom>
        <RadioCustom name="version"
          v-model="simulacao.nParcelas"
          valueDefalut="48">
          48
        </RadioCustom>
      </div>

      <label>Valor da entrada*</label>
      <money class="FormSimulacao__input"
        v-model="simulacao.valorEntrada"
        v-bind="money" />

      <CheckCustom v-model="simulacao.receberOfertas">
        Desejo receber ofertas exclusivas da PG Prime.
      </CheckCustom>

      <BtnPrimary type="submit"
        @click.native.prevent.stop="handleSubmit">
        SIMULAR FINANCIMENTO
      </BtnPrimary>
    </form>

    <a href="#" class="FormSimulacao__politica">
      Política de privacidade
    </a>
  </div>
</template>

<script>
import RadioCustom from '@/components/Form/RadioCustom'
import CheckCustom from '@/components/Form/CheckCustom'
import BtnPrimary from '@/components/Btn/BtnPrimary'
import masks from '@/util/masks'

export default {
  name: 'FormSimulacao',

  components: {
    RadioCustom,
    CheckCustom,
    BtnPrimary
  },

  data () {
    let versions = [
      {value: 1, text: '1.8L DUAL VVT-1 16V'},
      {value: 2, text: '2.0L DUAL VVT-1 16V'}
    ];

    return {
      masks,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      },
      versions,
      simulacao: {
        versao: versions[0],
        nome: null,
        email: null,
        telefone: null,
        nParcelas: '12',
        valorEntrada: 0,
        receberOfertas: false
      }
    }
  },

  methods: {
    handleSubmit () {
      console.log(this.simulacao)
    }
  }
}
</script>

<style lang="scss">
.FormSimulacao {
  background: rgba(24, 23, 23, .6);
  padding: $padding-base $padding-small;
  color: $color-white;
  font-size: $font-size-small;

  .FormSimulacao__title {
    margin: 0;
    font-weight: $font-weight-light;
    text-align: center;
  }

  .FormSimulacao_subtitle {
    margin-bottom: $margin-extra;
    font-weight: $font-weight-light;
    text-align: center;
  }

  .v-select {
    .dropdown-toggle {
      border: $border-input-form;
      border-radius: $border-radius;
      height: 30px;
    }

    input[type=search], 
    input[type=search]:focus {
      color: rgba(255,255,255,.6);
    }

    .selected-tag {
      color: rgba(255,255,255,.6);
    }

    &.single.open .selected-tag {
      position: relative; /* faz com que o texto não suba quando aberto */
      opacity: 1;
    }

    .open-indicator:before {
      border-color: #fff;
      border-style: solid;
      border-width: 3px 3px 0 0;
      height: 8px;
      width: 8px;
    }

    .dropdown-menu {
      padding: 0;
      border-radius: 0;
      border: none;
      background: $color-white;
      color: $color-gray-dark;
      overflow-y: auto;

      & > .highlight > a {
        /* background: $color-background-submenu; */
        color: $color-white;
      }
    }
  }

  .FormSimulacao__input {
    background: transparent;
    border: $border-input-form;
    border-radius: $border-radius;
    height: 30px;
    outline: none;
    padding: $padding-wee;
    margin: 0 0 $margin-small 0;
    display: block;
    width: 100%;
    color: rgba(255,255,255,.6);
    &::placeholder {
      color: rgba(255,255,255,.6);
    }
  }

  .FormSimulacao__radio {
    display: flex;
    justify-content: space-between;
    margin-bottom: $margin-small;
    
    .RadioCustom {
      margin-right: $margin-base;
    }
  }

  .FormSimulacao__hr {
    border: .7px solid rgba(121,121,121,.6);
    height: 0;
    margin: $margin-small 0;
  }

  .FormSimulacao__politica {
    display: inline-block;
    text-decoration: underline;
    margin-top: $padding-extra;
    color: $color-white;
  }
}
</style>
