<template>
  <div class="SocialLinks">
    <a href="#" class="SocialLinks__link SocialLinks__link--face">
      <i class="fa fa-facebook"></i>
    </a>
    <a href="#" class="SocialLinks__link SocialLinks__link--twitter">
      <i class="fa fa-twitter"></i>
    </a>
    <a href="#" class="SocialLinks__link SocialLinks__link--google">
      <i class="fa fa-google-plus"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks'
}
</script>

<style lang="scss">
.SocialLinks {
  display: flex;
  align-items: flex-start;

  .SocialLinks__link {
    padding: $padding-base;
    background: rgba(234, 234, 234, 1);
    color: #333;
    margin: 0 2px;
  }

  .SocialLinks__link--face {
    &:hover {
      background: $color-facebook;
    }
  }

  .SocialLinks__link--twitter {
    &:hover {
      background: $color-twitter;
    }
  }

  .SocialLinks__link--google {
    &:hover {
      background: $color-google;
    }
  }
}
</style>
