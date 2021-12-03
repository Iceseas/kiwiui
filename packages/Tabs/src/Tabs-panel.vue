<template>
  <div 
    ref="tabPanel"
    v-show="activeChild === labelVal"
    class="kiwi-tabs--panel">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'kiwi-tab-panel',
  mounted() {
    this.activeChild = this.$parent.value
    this.labelVal = this.val;
  },
  watch:{
    '$parent.value': function(newVal, oldVal) {
      this.activeChild = newVal
    },
  },
  data() {
    return {
      activeChild: '',
      labelVal: null
    }
  },
  props:{
    label: String,
    val: String,
    iconName: String
  }
}
</script>

<style scoped>

</style>