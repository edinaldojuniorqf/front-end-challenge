<template>
  <div class="SectionFooter">
    <div class="container">
      <LogoGrandMotors />
      <SocialLinks />
      <div class="SectionFooter__content">
        &copy; Copyright 2015 - Cliente - Todos os direitos reservados
        <NavFooter />
      </div>
      <div class="w-100"></div>
      <LogoAutoForce />
    </div>
  </div>
</template>

<script>
import LogoGrandMotors from '@/components/Header/LogoGrandMotors'
import LogoAutoForce from '@/components/Footer/LogoAutoForce'
import NavFooter from '@/components/Footer/NavFooter'
import SocialLinks from '@/components/Footer/SocialLinks'

export default {
  name: 'SectionFooter',

  components: {
    LogoGrandMotors,
    LogoAutoForce,
    NavFooter,
    SocialLinks
  }
}
</script>

<style lang="scss">
.SectionFooter {
  background: $color-gray-darker;
  padding: $padding-large 0 $padding-base 0;
  font-size: $font-size-small;
  color: $color-gray-dark;
  display: flex;
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .LogoGrandMotors {
    margin-bottom: $margin-small;
  }

  .SocialLinks {
    margin-bottom: $margin-small;
  }

  .LogoAutoForce {
    margin: $margin-large auto $margin-small auto;
  }
  
  a {
    color: $color-gray-dark;
    text-decoration: underline;

    &:hover {
      color: $color-gray;
    }
  }

  .SectionFooter__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @include media-breakpoint-up(md) {
    .container {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }

    .LogoGrandMotors {
      order: 1;
    }

    .SectionFooter__content {
      order: 2;
    }

    .SocialLinks {
      order: 3;
    }

    .w-100 {
      order: 4;
    }

    .LogoAutoForce {
      order: 5;
      align-self: flex-start;
    }
  }
}
</style>
