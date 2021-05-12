<template>
  <div 
    :class="[
      'kiwi-radio-block',
      {
        'radio-disabeld': disabeld
      }
    ]" 
    @click="disabeld?'':handleChangeRadio()"
  >
    <div class="kiwi-radio--box">
      <span 
        :class="[
        'kiwi-radio-checkbox' + '',
        !disabeld && (model === val) ? 'radio-checked':'radio-nochecked'
      ]">
        <span 
          :class="[
          'kiwi-radio--circle' + '',
          !disabeld && (model === val)? 'radio-circle-show' : 'radio-circle-close'
        ]"></span>
        <input 
          ref="radio"
          class="kiwi-radio--input-init"
          type="radio"
          :name="name"
          :disabeld="disabeld"
          v-model="model"
          :value="val">
      </span>
      <span 
        :class="[
          'kiwi-radio--label' + '',
          !disabeld && (model === val) ? 'checked-label':'nochecked-label'
        ]"
      >
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </div>
  </div>
</template>
<script>

export default {
  name:'kiwi-radio',
  props:{
    label:{
      type:String,
      default: '备选项'
    },
    name:String,
    disabeld:{
      type:Boolean,
      default: false
    },
    val: {},
    value: {}
  },
  data(){
    return {

    }
  },
  computed:{
    isGroup() {
      let parent = this.$parent;
      while(parent) {
        if (parent.$options._componentTag != 'kiwi-radio-group'){
          parent = parent.$parent;
        } else {
          return true;
        }
      }
      return false;
    },
    model:{
      get(){
           return this.isGroup ? this.$parent.value : this.value;
        },
        set(value){
           this.isGroup ? this.$parent.$emit('input',value) : this.$emit('input',value);
           this.$refs.radio && (this.$refs.radio.checked = this.model === this.val);
       }
    }
  },
  methods:{
    handleChangeRadio(){
      this.model = this.$refs.radio.value;
      this.$emit('change',this.$refs.radio.value);
    }
  }
}
</script>

<style scoped>
.kiwi-radio-block{
  display: inline-block;
  cursor: pointer;
  margin: 0 10px;
}
.radio-disabeld{
  cursor: not-allowed !important;
  background: #fff;
  opacity: 0.5;
}
.kiwi-radio--box{
  position: relative;
  display: flex;
  height: 16px;
  line-height: 16px;
  width: 80px;
  box-sizing: border-box;
}
.kiwi-radio--input-init{
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
/* 被选中 */
.radio-checked{
  background: cornflowerblue;
  transition: 0.3s;
}
.radio-nochecked{
  background: #fff;
  transition: 0.3s;
}
.checked-label{
  color: cornflowerblue;
  transition:0.3s;
}
.nochecked-label{
  color: #606266;
  transition:0.3s;
}
.radio-circle-show{
  width: 5px;
  height: 5px;
  opacity: 1;
  transition-timing-function:ease-out;
  transition: 0.2s;
}
.radio-circle-close{
  width: 0px;
  height: 0px;
  opacity: 0;
  transition-timing-function:ease-out;
  transition: 0.2s;
}
.kiwi-radio-checkbox{
  width: 13px;
  height: 13px;
  margin-top: 2px;
  border-radius: 100%;
  border: 1px solid #999;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
}
.kiwi-radio--circle{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  border-radius: 100%;
}
.kiwi-radio--label{
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  box-sizing: border-box;
  display: inline-block;
}
</style>