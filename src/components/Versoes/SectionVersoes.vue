<template>
  <div class="SectionVersoes">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <ListVersoes />
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="d-flex align-items-center justify-content-center col-md-6">
              <ImgVersaoGeral />
            </div>
            <div class="col-md-6">
              <InfoGeralVersao />
            </div>
            <div class="col-md-12">
              <TagsVersao />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListVersoes from '@/components/Versoes/ListVersoes.container'
import InfoGeralVersao from '@/components/Versoes/InfoGeralVersao.container'
import TagsVersao from '@/components/Versoes/TagsVersao.container'
import ImgVersaoGeral from '@/components/Versoes/ImgVersaoGeral.container'

export default {
  name: 'SectionVersoes',

  components: {
    ListVersoes,
    InfoGeralVersao,
    TagsVersao,
    ImgVersaoGeral
  }
}
</script>

<style lang="scss">
.SectionVersoes {
  background: url('../../assets/images/bg-versoes.jpg') #333;
  background-size: cover;
  padding-bottom: $padding-wee;

  .ListVersao {
    margin-bottom: $margin-big;
  }

  @include media-breakpoint-down(md) {
    .TagsVersao {
      margin-top: $margin-base;
    }
  }

}
</style>
