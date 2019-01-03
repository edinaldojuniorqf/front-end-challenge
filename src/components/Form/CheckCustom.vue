<template>
  <label class="CheckCustom">
    <input type="checkbox" :name="name" :value="value" @input="handleInput">
    <span class="checkmark"></span>
    <slot />
  </label>
</template>

<script>
export default {
  name: 'CheckCustom',

  props: {
    value: {
      type: Boolean
    },

    name: {
      type: String
    }
  },

  methods: {
    handleInput (e) {
      this.$emit('input', e.target.checked)
    }
  }
}
</script>

<style lang="scss">
.CheckCustom {
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  display: flex;
}

/* Hide the browser's default checkbox */
.CheckCustom input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.CheckCustom .checkmark {
  display: block;
  position: relative;
  height: 16px;
  width: 16px;
  border: 2px solid $color-white;
  border-radius: $border-radius;
  margin-right: $margin-tiny;
}

/* On mouse-over, add a grey background color */
.CheckCustom:hover input ~ .checkmark {
  /* background-color: #ccc; */
}

/* When the checkbox is checked, add a blue background */
.CheckCustom input:checked ~ .checkmark {
  /* background-color: $color-white; */
}

/* Create the checkmark/indicator (hidden when not checked) */
.CheckCustom .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.CheckCustom input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.CheckCustom .checkmark:after {
  left: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  background: $color-white;
}
</style>
