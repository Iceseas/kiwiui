<template>
  <div
    :class="[
      'kiwi-checkbox-block'+'',
      {
        'checkbox-disabled': disabled
      }
    ]"
    @click="handleChangeCheckbox"
  >
    <div class="kiwi-checkbox--box">
      <span
        :class="[
          'kiwi-checkbox-checkblock' + '',
          !disabled && model ? 'checkbox-checked':'checkbox-nochecked'
      ]">
        <span 
          :class="[
            'kiwi-checkbox--circle' + '',
            !disabled && model ? 'checkbox-checked-show' : 'checkbox-checked-close'
        ]"><i class="iconfont icon-gouxuan"></i></span>
        <!-- 单独使用 -->
        <input 
          v-if="!isGroup"
          class="kiwi-checkbox--input-init"
          type="checkbox" 
          :name="name"
          :disabeld="disabled"
          v-model="model">
        <!-- 如果存在多选组 -->
        <input 
          v-if="isGroup"
          ref="checkbox"
          class="kiwi-checkbox--input-init"
          type="checkbox" 
          :name="name"
          :disabeld="disabled"
          v-model="model"
          :value="val">
      </span>
      <span 
        :class="[
          'kiwi-checkbox--label' + '',
          !disabled && model ? 'checked-label':'nochecked-label'
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
  name:'kiwi-checkbox',
  props:{
    name: String,
    disabled:{
      type: Boolean,
      default: false
    },
    value: {},
    val: {},
    label:{
      type:String,
      default: '备选项'
    },
  },
  computed:{
    isGroup() {
      let parent = this.$parent;
      while(parent) {
        if (parent.$options._componentTag != 'kiwi-checkbox-group'){
          parent = parent.$parent;
        } else {
          return true;
        }
      }
      return false;
    },
    model:{
      get(){
          return this.isGroup ? this.$parent.value.includes(this.val) : this.value;
      },
      set(value){
        if (this.isGroup) {
          this.$nextTick(()=>{
            // 因为子复选框的是否选中靠的是Boolean值，之前单独使用是直接v-model了Boolean值，现在使用group，子多选框绑定的值为undefined，所以传入父节点的数组是否存在即可
            this.$emit('input', this.$parent.value.includes(this.val))
          })
        } else {
          this.$emit('input',value);
        }
      }
    }
  },
  methods:{
    handleChangeCheckbox(){
      this.model = !this.model;
      if (this.isGroup && !this.disabled) {
        // 如果group数组存在此元素则删除
        if(this.$parent.value.includes(this.val)){
          this.$parent.value.splice(this.$parent.value.indexOf(this.val), 1)
        } else {
          // 如果group数组不存在此元素则增加
          this.$parent.value.push(this.val)
        }
      }
      else {
        this.$nextTick(()=>{
          this.$emit('change', this.model);
        })
      }
    }
  }
}
</script>

<style scoped>
@import '../../../examples/assets/iconfont/iconfont.css';

.kiwi-checkbox-block{
  display: inline-block;
  cursor: pointer;
  margin: 0 10px;
}
.checkbox-disabled{
  cursor: not-allowed !important;
  background: #fff;
  opacity: 0.5;
}
.kiwi-checkbox--box{
  position: relative;
  display: flex;
  height: 16px;
  line-height: 16px;
  width: 80px;
  box-sizing: border-box;
}
.kiwi-checkbox--input-init{
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
.kiwi-checkbox-checkblock{
  width: 13px;
  height: 13px;
  margin-top: 2px;
  border: 1px solid #999;
  border-radius: 3px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.kiwi-checkbox--circle{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: cornflowerblue;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}
.kiwi-checkbox--label{
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  box-sizing: border-box;
  display: inline-block;
}
.checkbox-checked-show{
  opacity: 1;
  transition-timing-function:ease-out;
  transition: 0.2s;
}
.checkbox-checked-close{
  width: 0px;
  height: 0px;
  opacity: 0;
  transition-timing-function:ease-out;
  transition: 0.2s;
}
/* 被选中 */
.checkbox-checked{
  background: cornflowerblue;
  transition: 0.3s;
}
.checkbox-nochecked{
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
.icon-gouxuan{
  color: #fff;
  font-size: 12px;
}
</style>