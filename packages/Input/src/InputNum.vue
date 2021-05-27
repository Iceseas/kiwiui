<template>
  <div 
    :class="[
      'kiwi-input-num--box',
      {
        'is-disabled': disabled
      }
    ]">
    <div class="kiwi-input-num--box-flex">
      <kiwi-button 
        size="small" 
        class="button-no-margin"
        @click="model === minNum || disabled ? '' : handleDecrease() "
        :disabled="model === minNum || disabled ? true : false "
      >
        <i class="iconfont icon-jian"></i>
      </kiwi-button>
      <div class="kiwi-input-outbox">
        <input 
        ref="inputNumber"
        type="number"
        v-model="model"
        :disabled="disabled"
        :min="minNum"
        :name="name"
        :readonly="readonly"
        placeholder=""
        :max="maxNum"
        @blur="handleBlur($event)"
        @focus="handleFocus($event)"
        class="input-init">
      </div>
      <kiwi-button 
        size="small" 
        class="button-no-margin"
        @click="model === maxNum || disabled? '' : handlePlus() "
        :disabled="model === maxNum || disabled? true : false "
      >
        <i class="iconfont icon-jia"></i>
      </kiwi-button>
    </div>
  </div>
</template>

<script>
import kiwiButton from '../../Button/src/Button'
export default {
  name: 'kiwi-input-num',
  components:{
    kiwiButton
  },
  props:{
    value:{},
    minNum: {
      type: Number,
      default: 1
    },
    maxNum: {
      type: Number,
      default: 10
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed:{
    model:{
      get(){
        return this.value;
      },
      set(val){
        if (val > this.maxNum) {
          this.$emit('input', this.maxNum);
        } else if (val < this.minNum) {
          this.$emit('input', this.minNum);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  methods:{
    handleDecrease(){
      this.model -= this.step;
    },
    handlePlus(){
      this.model += this.step;
    },
    // 控制输入
    handleBlur(e){
      this.$refs.inputNumber.value = this.model;
      this.$emit('blur', e)
    },
    handleFocus(e){
      this.$emit('focus', e)
    }
  }
}
</script>

<style scoped>
.kiwi-input-num--box-flex{
  display: flex;
}
.kiwi-input-num--box{
  display: inline-block;
  border: 1px solid #e4e7ed;
  overflow: hidden;
  border-radius: 4px;
  width: 200px;
  position: relative;
}
.iconfont{
  color: #fff
}
.button-no-margin{
  margin: 0;
}
.kiwi-input-outbox{
  flex: 1;
}
.input-init{
  text-align: center;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
/* 禁用样式 */
.is-disabled::after {
  position: absolute;
  content: "";
  left: 0px;
  top: 0px;
  cursor: not-allowed;
  width: 100%;
  height: 100%;
  background: #eee;
  opacity: 0.5;
}
</style>