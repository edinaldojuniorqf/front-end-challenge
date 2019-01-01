<template>
  <div class="HeaderContent">
    <div class="HeaderContent__content">
      <h1 class="HeaderContent__title">ETIOS HATCH 2017</h1>
      <h2 class="HeaderContent__subtitle">X 1.3 MANUAL</h2>
      <h3 class="HeaderContent__desc">Você tem mais para descobrir</h3>

      <h2 class="HeaderContent__de">de <span class="HeaderContent__valorDe">R$ 44.120,00</span></h2>
      <h1 class="HeaderContent__por">por R$ 40.987,00</h1>
      <small class="HeaderContent__info">*Consulte as Condições Comerciais.</small>
    </div>
    <div class="HeaderContent__footer">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContent'
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
}
</style>
