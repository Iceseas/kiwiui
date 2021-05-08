<template>
  <div class="kiwi-radio--box"
    @click="handleClick">
    <span 
      class="kiwi-radio--circle"
      :class="{
        'is-checked': model === val
      }"
      ></span>
    <input 
      ref="radio"
      class="kiwi-radio--input"
      :value='val'
      type="radio"
      v-model="model" 
      @change="handleChange">
    <span class="kiwi-radio--label">
      <template v-if="!$slots.default">{{ label }}</template>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    value:{},
    val: {},
    label:{
      type: String,
      default: '选项'
    }
  },
  computed:{
    model:{
      get(){
        return this.value
      },
      set(val){
        this.$emit('input', val);
      }
    },
  },
  data(){
    return{

    }
  },
  methods: {
    handleClick(val){
      this.$emit('click', val);
    }
  }
}
</script>

<style scoped>
.kiwi-radio--box{
  display: inline-block;
  position: relative;
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  margin: 0 5px;
}
.kiwi-radio--label{
  font-size: 14px;
  padding-left: 10px;
}
.kiwi-radio--circle{
  display: inline-block;
  border: 1px solid #DCDFE6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #FFF;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}
.kiwi-radio--circle.is-checked{
  background: #409EFF;
}
.kiwi-radio--input{
  opacity: 0;
  outline: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0
}
.kiwi-radio--box.is-checked .kiwi-radio--circle {
  border-color: #409EFF;
  background: #409EFF
}
.kiwi-radio--circle::after{
  background: #FFF;
}
</style>