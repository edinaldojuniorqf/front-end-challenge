<template>
  <div class="SectionHeaderContent">
    <div class="container">
      <HeaderMain />
    </div>
    <div class="container SectionHeader__container">
      <div class="row">
        <div class="d-flex col-md-8 order-md-2">
          <HeaderContent />
        </div>
        <div class="col-md-4 order-md-1">
          <FormSimulacao />
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import HeaderMain from '@/components/Header/HeaderMain'
import HeaderContent from '@/components/Header/HeaderContent.container'
import FormSimulacao from '@/components/Form/FormSimulacao.container'

export default {
  name: 'SectionHeaderContent',

  components: {
    HeaderMain,
    HeaderContent,
    FormSimulacao
  }
}
</script>

<style>

</style>
