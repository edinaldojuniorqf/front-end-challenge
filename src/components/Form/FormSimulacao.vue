<template>
  <div class="FormSimulacao">
    <h4 class="FormSimulacao__title">SIMULAR FINANCIAMENTO</h4>
    <h6 class="FormSimulacao_subtitle">Escolha a parcela que cabe no seu bolso</h6>
    
    <form>
      <label for="FormSimulacao__versao">Escolha uma versão</label>
      <v-select inputId="FormSimulacao__versao"
        :value="versao"
        @input="handleVersaoInput"
        :options="versoes"
        label="nome"
        :clearable="false"
        :searchable="false">
        <template slot="option" slot-scope="option">
          {{ option.nome }}
        </template>
      </v-select>

      <hr class="FormSimulacao__hr" />

      <div class="form-group">
        <input class="FormSimulacao__input"
          :class="{
            'FormSimulacao__input--danger': validation.hasError('simulacao.nome')
          }"
          v-model="simulacao.nome"
          type="text"
          placeholder="Nome*"
          maxlength="255">
        <span class="help-block">{{ validation.firstError('simulacao.nome') }}</span>
      </div>
      
      <div class="form-group">
        <input class="FormSimulacao__input"
          :class="{
            'FormSimulacao__input--danger': validation.hasError('simulacao.email')
          }"
          v-model="simulacao.email"
          type="text"
          placeholder="E-mail*"
          maxlength="255">
        <span class="help-block">{{ validation.firstError('simulacao.email') }}</span>
      </div>

      <div class="form-group">
        <input class="FormSimulacao__input"
          :class="{
            'FormSimulacao__input--danger': validation.hasError('simulacao.telefone')
          }"
          v-model="simulacao.telefone"
          type="text"
          placeholder="Telefone*"
          v-mask="[masks.telefone, masks.celular]">
        <span class="help-block">{{ validation.firstError('simulacao.telefone') }}</span>
      </div>

      <div class="form-group"
        :class="{
          'FormSimulacao__form-group--danger': validation.hasError('simulacao.nParcelas')
        }">
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
        <span class="help-block">{{ validation.firstError('simulacao.nParcelas') }}</span>
      </div>

      <div class="form-group"
        :class="{
           'FormSimulacao__form-group--danger': validation.hasError('simulacao.valorEntrada')
        }">
        <label>Valor da entrada*</label>
        <money class="FormSimulacao__input"
          :class="{
            'FormSimulacao__input--danger': validation.hasError('simulacao.valorEntrada')
          }"
          v-model="simulacao.valorEntrada"
          v-bind="money" />
          <span class="help-block">{{ validation.firstError('simulacao.valorEntrada') }}</span>
      </div>

      <div class="form-group">
        <CheckCustom v-model="simulacao.receberOfertas">
          Desejo receber ofertas exclusivas da PG Prime.
        </CheckCustom>
      </div>

      <BtnPrimary type="submit"
        @click.native.prevent.stop="handleSubmit">
        SIMULAR FINANCIMENTO
      </BtnPrimary>
      <p class="help-block mt-2">{{ validation.firstError() }}</p>
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
import SimpleVueValidation from 'simple-vue-validator'

SimpleVueValidation.setMode('conservative');

const Validator = SimpleVueValidation.Validator

export default {
  name: 'FormSimulacao',

  components: {
    RadioCustom,
    CheckCustom,
    BtnPrimary
  },

  props: {
    versoes: {
      type: Array,
      default () {
        return []
      }
    },

    versao: {
      type: Object,
      default () {
        return null
      }
    }
  },

  data () {
    return {
      masks,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      },
      simulacao: {
        versao: null,
        nome: null,
        email: null,
        telefone: null,
        nParcelas: null,
        valorEntrada: 0,
        receberOfertas: false
      }
    }
  },

  validators: {
    'simulacao.nome' (value) {
      return Validator.value(value).required('Informe seu nome')
    },

    'simulacao.email' (value) {
      return Validator.value(value)
        .email('Informe um e-email válido')
        .required('Informe seu e-mail')
    },

    'simulacao.telefone' (value) {
      return Validator.value(value).required('Informe seu telefone')
    },

    'simulacao.nParcelas' (value) {
      return Validator.value(value).required('Informe o número de parcelas')
    },

    'simulacao.valorEntrada' (value) {
      return Validator.value(value).greaterThan(0, 'Informe o valor da entrada')
    }
  },

  methods: {
    handleSubmit () {
      this.$validate().then(success => {
        if (success) {
          console.log('ok')
        } else {
          console.log('erro')
        }
      })
    },

    handleVersaoInput (versao) {
      this.simulacao.versao = versao
      this.$emit('setVersao', versao)
      this.$emit('setInfoVersaoDestaque', versao.id)
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

  @include media-breakpoint-down(sm) {
    margin-top: $margin-big;
  }

  .FormSimulacao__title {
    margin: 0;
    font-weight: $font-weight-normal;
    text-align: center;
  }

  .FormSimulacao_subtitle {
    margin-bottom: $margin-extra;
    font-weight: $font-weight-normal;
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
        background: $color-background-submenu;
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
    margin: 0;
    display: block;
    width: 100%;
    color: rgba(255,255,255,.6);
    &::placeholder {
      color: rgba(255,255,255,.6);
    }
  }

  .FormSimulacao__input--danger {
    border-color: $color-danger;
    color: $color-danger;
    &::placeholder {
      color: $color-danger;
    }
  }

  .FormSimulacao__form-group--danger {
    color: $color-danger;

    .RadioCustom {
      .checkmark {
        border-color: $color-danger;
      }
    }
  }

  .help-block {
    color: $color-danger;
  }

  .FormSimulacao__radio {
    display: flex;
    justify-content: space-between;
    
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
