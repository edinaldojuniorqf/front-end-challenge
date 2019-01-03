<template>
  <label class="RadioCustom">
    <input type="radio"
      :name="name"
      :value="valueDefalut"
      @input="handleInput">
    <span class="checkmark"></span>
    <slot />
  </label>
</template>

<script>
export default {
  name: 'RadioCustom',

  props: {
    value: {
      type: String
    },

    valueDefalut: {
      type: String
    },

    name: {
      type: String
    }
  },

  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.RadioCustom {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: $margin-tiny;
  cursor: pointer;
  user-select: none;
}

/* Hide the browser's default radio button */
.RadioCustom input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.RadioCustom .checkmark {
  display: block;
  position: relative;
  height: 16px;
  width: 16px;
  border: 2px solid $color-white;
  border-radius: 50%;
  margin-right: $margin-tiny;
}

/* On mouse-over, add a grey background color */
.RadioCustom:hover input ~ .checkmark {
  /* background-color: #ccc; */
}

/* When the radio button is checked, add a blue background */
.RadioCustom input:checked ~ .checkmark {
  /* background-color: #2196F3; */
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.RadioCustom .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.RadioCustom input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.RadioCustom .checkmark:after {
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
