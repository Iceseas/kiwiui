<template>
  <div class="kiwi-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'kiwi-checkbox-group',
  props:{
    value: Array,
    disabeld:{
      type:Boolean,
      default: false
    },
  },
  watch: {
    value(newValue) {
    this.$emit("groupChange", newValue);
  }
  }
}
</script>

<style scoped>
.kiwi-checkbox-group{
  display: inline-block;
}
</style>