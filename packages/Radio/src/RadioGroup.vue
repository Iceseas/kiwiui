<template>
  <div class="kiwi-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "kiwi-radio-group",
  props: {
    value: {},
    disabeld: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(newValue) {
      this.$emit("groupChange", newValue);
    }
  }
};
</script>

<style scoped>
.kiwi-radio-group {
  display: inline-block;
}
</style>
