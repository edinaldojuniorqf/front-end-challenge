<template>
  <div class="SectionFooter">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <LogoGrandMotors />
        </div>
        <div class="col-md-6 SectionFooter__content">
          &copy; Copyright 2015 - Cliente - Todos os direitos reservados
          <NavFooter />
        </div>
        <div class="col-md-3 d-flex justify-content-end">
          <SocialLinks />
        </div>
        <div class="col-md-12">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoGrandMotors from '@/components/Header/LogoGrandMotors'
import NavFooter from '@/components/Footer/NavFooter'
import SocialLinks from '@/components/Footer/SocialLinks'

export default {
  name: 'SectionFooter',

  components: {
    LogoGrandMotors,
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
}
</style>
