<template>
  <div class="SocialLinks">
    <a href="#" class="SocialLinks__link SocialLinks__link--face">
      <font-awesome-icon :icon="{prefix: 'fab', iconName: 'facebook-f'}" size="lg" />
    </a>
    <a href="#" class="SocialLinks__link SocialLinks__link--twitter">
      <i class="fa fa-twitter"></i>
      <font-awesome-icon :icon="{prefix: 'fab', iconName: 'twitter'}" size="lg" />
    </a>
    <a href="#" class="SocialLinks__link SocialLinks__link--google">
      <font-awesome-icon :icon="{prefix: 'fab', iconName: 'google'}" size="lg" />
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

  .SocialLinks__link {
    display: inline-block;
    padding: $padding-wee;
    width: 40px;
    text-align: center;
    background: rgba(234, 234, 234, .25);
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
