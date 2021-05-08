<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      'button_init',
      type ? 'kiwi-button--' + type : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "kiwi-button",
  props: {
    type: {
      type: String,
      default: "normal",
    },
    plain: Boolean,
    round: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    nativeType: {
      type: String,
      default: "button",
    },
  },
  computed: {},
  methods: {
    handleClick(evt) {
      if (!this.disabled) {
        this.$emit("click", evt);
      }
    },
  },
};
</script>

<style>
.button_init {
  display: inline-block;
  margin: 10px;
  width: 80px;
  height: 35px;
  font-size: 12px;
  position: relative;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  border: none;
}
/* 普通按钮 */
.kiwi-button--normal {
  background: #67c23a;
  color: #ffffff;
}
/* disabled */
.kiwi-button--normal.is-disabled:hover{
  background: #67c23a;
  color: #ffffff;
}
/* disabled */
.kiwi-button--normal.is-round.is-disabled:hover{
  background: #67c23a;
  color: #ffffff;
}
/* 非朴素normal的hover和active样式 */
.kiwi-button--normal:hover,
.kiwi-button--normal.is-round:hover {
  background: #84cc5f;
  transition: 0.2s;
}
.kiwi-button--normal:active,
.kiwi-button--normal.is-round:active {
  background: #5eaf35;
  transition: 0.1s;
}
.kiwi-button--normal.is-plain {
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
}
.kiwi-button--normal.is-plain.is-round {
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  border-radius: 10px;
}
/* disabled */
.kiwi-button--normal.is-plain.is-disabled:hover{
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
}
/* disabled */
.kiwi-button--normal.is-plain.is-round.is-disabled:hover{
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
}
/* 朴素normal的hover和active样式 */
.kiwi-button--normal.is-plain:hover,
.kiwi-button--normal.is-plain.is-round:hover {
  color: #67c23a;
  transition: 0.2s;
  background: #fff;
  border: 1px solid #93db6f;
}
.kiwi-button--normal.is-plain:active,
.kiwi-button--normal.is-plain.is-round:active {
  color: #67c23a;
  transition: 0.1s;
  border: 1px solid #67c23a;
}
.kiwi-button--normal.is-round {
  background: #67c23a;
  color: #ffffff;
  border-radius: 20px;
}
/* 默认按钮 */
.kiwi-button--default {
  background: #1989fa;
  color: #ffffff;
}
/* disabled */
.kiwi-button--default.is-disabled:hover{
  background: #1989fa;
  color: #ffffff;
}
/* disabled */
.kiwi-button--default.is-round.is-disabled:hover{
  background: #1989fa;
  color: #ffffff;
}
/* 非朴素default的hover和active样式 */
.kiwi-button--default:hover,
.kiwi-button--default.is-round:hover {
  background: #66b1ff;
  transition: 0.2s;
}
.kiwi-button--default:active,
.kiwi-button--default.is-round:active {
  background: #167adf;
  transition: 0.1s;
}
.kiwi-button--default.is-plain {
  background: #fff;
  border: 1px solid #1989fa;
  color: #1989fa;
}
.kiwi-button--default.is-plain.is-round {
  background: #fff;
  border: 1px solid #1989fa;
  color: #1989fa;
  border-radius: 10px;
}
/* disabled */
.kiwi-button--default.is-plain.is-disabled:hover{
  background: #fff;
  border: 1px solid #1989fa;
  color: #1989fa;
}
/* disabled */
.kiwi-button--default.is-plain.is-round.is-disabled:hover{
  background: #fff;
  border: 1px solid #1989fa;
  color: #1989fa;
}
/* 朴素default的hover和active样式 */
.kiwi-button--default.is-plain:hover,
.kiwi-button--default.is-plain.is-round:hover {
  background: #1989fa;
  border: 1px solid #1989fa;
  color: #fff;
  transition: 0.2s;
}
.kiwi-button--default.is-plain:active,
.kiwi-button--default.is-plain.is-round:active {
  color: #fff;
  transition: 0.1s;
  border: 1px solid #167adf;
  background: #167adf;
}
.kiwi-button--default.is-round {
  background: #1989fa;
  color: #ffffff;
  border-radius: 20px;
}
/* 警告按钮 */
.kiwi-button--error {
  background: #eb2f06;
  color: #ffffff;
}
/* disabled */
.kiwi-button--error.is-disabled:hover{
  background: #eb2f06;
  color: #ffffff;
}
/* disabled */
.kiwi-button--error.is-round.is-disabled:hover{
  background: #eb2f06;
  color: #ffffff;
}
/* 非朴素error的hover和active样式 */
.kiwi-button--error:hover,
.kiwi-button--error.is-round:hover {
  background: #e7684b;
  transition: 0.2s;
}
.kiwi-button--error:active,
.kiwi-button--error.is-round:active {
  background: #c32603;
  transition: 0.1s;
}
.kiwi-button--error.is-plain {
  background: #fff;
  border: 1px solid #eb2f06;
  color: #eb2f06;
}
.kiwi-button--error.is-plain.is-round {
  background: #fff;
  border: 1px solid #eb2f06;
  color: #eb2f06;
  border-radius: 10px;
}
/* disabled */
.kiwi-button--error.is-plain.is-disabled:hover{
  background: #fff;
  border: 1px solid #eb2f06;
  color: #eb2f06;
}
/* disabled */
.kiwi-button--error.is-plain.is-round.is-disabled:hover{
  background: #fff;
  border: 1px solid #eb2f06;
  color: #eb2f06;
}
/* 朴素default的hover和active样式 */
.kiwi-button--error.is-plain:hover,
.kiwi-button--error.is-plain.is-round:hover {
  background: #eb2f06;
  border: 1px solid #eb2f06;
  color: #fff;
  transition: 0.2s;
}
.kiwi-button--error.is-plain:active,
.kiwi-button--error.is-plain.is-round:active {
  color: #fff;
  transition: 0.1s;
  border: 1px solid #c32603;
  background: #c32603;
}
.kiwi-button--error.is-round {
  background: #eb2f06;
  color: #ffffff;
  border-radius: 20px;
}
/* 主要按钮 */
.kiwi-button--success {
  background: #2ecc71;
  color: #ffffff;
}
/* disabled */
.kiwi-button--success.is-disabled:hover{
  background: #2ecc71;
  color: #ffffff;
}
/* disabled */
.kiwi-button--success.is-round.is-disabled:hover{
  background: #2ecc71;
  color: #ffffff;
}
/* 非朴素success的hover和active样式 */
.kiwi-button--success:hover,
.kiwi-button--success.is-round:hover {
  background: #7ad6a1;
  transition: 0.2s;
}
.kiwi-button--success:active,
.kiwi-button--success.is-round:active {
  background: #1fad5b;
  transition: 0.1s;
}
.kiwi-button--success.is-plain {
  background: #fff;
  border: 1px solid #2ecc71;
  color: #2ecc71;
}
.kiwi-button--success.is-plain.is-round {
  background: #fff;
  border: 1px solid #2ecc71;
  color: #2ecc71;
  border-radius: 10px;
}
/* disabled */
.kiwi-button--success.is-plain.is-disabled:hover{
  background: #fff;
  border: 1px solid #2ecc71;
  color: #2ecc71;
}
/* disabled */
.kiwi-button--success.is-plain.is-round.is-disabled:hover{
  background: #fff;
  border: 1px solid #2ecc71;
  color: #2ecc71;
}
/* 朴素default的hover和active样式 */
.kiwi-button--success.is-plain:hover,
.kiwi-button--success.is-plain.is-round:hover {
  background: #2ecc71;
  border: 1px solid #2ecc71;
  color: #fff;
  transition: 0.2s;
}
.kiwi-button--success.is-plain:active,
.kiwi-button--success.is-plain.is-round:active {
  color: #fff;
  transition: 0.1s;
  border: 1px solid #1fad5b;
  background: #1fad5b;
}
.kiwi-button--success.is-round {
  background: #2ecc71;
  color: #ffffff;
  border-radius: 20px;
}
/* 警告按钮 */
.kiwi-button--warning {
  background: #f39c12;
  color: #ffffff;
}
/* disabled */
.kiwi-button--warning.is-disabled:hover{
  background: #f39c12;
  color: #ffffff;
}
/* disabled */
.kiwi-button--warning.is-round.is-disabled:hover{
  background: #f39c12;
  color: #ffffff;
}
/* 非朴素warning的hover和active样式 */
.kiwi-button--warning:hover,
.kiwi-button--warning.is-round:hover {
  background: #ffc365;
  transition: 0.2s;
}
.kiwi-button--warning:active,
.kiwi-button--warning.is-round:active {
  background: #d48200;
  transition: 0.1s;
}
.kiwi-button--warning.is-plain {
  background: #fff;
  border: 1px solid #f39c12;
  color: #f39c12;
}
.kiwi-button--warning.is-plain.is-round {
  background: #fff;
  border: 1px solid #f39c12;
  color: #f39c12;
  border-radius: 10px;
}
/* disabled */
.kiwi-button--warning.is-plain.is-disabled:hover{
  background: #fff;
  border: 1px solid #f39c12;
  color: #f39c12;
}
/* disabled */
.kiwi-button--warning.is-plain.is-round.is-disabled:hover{
  background: #fff;
  border: 1px solid #f39c12;
  color: #f39c12;
}
/* 朴素default的hover和active样式 */
.kiwi-button--warning.is-plain:hover,
.kiwi-button--warning.is-plain.is-round:hover {
  background: #f39c12;
  border: 1px solid #f39c12;
  color: #fff;
  transition: 0.2s;
}
.kiwi-button--warning.is-plain:active,
.kiwi-button--warning.is-plain.is-round:active {
  color: #fff;
  transition: 0.1s;
  border: 1px solid #d48200;
  background: #d48200;
}
.kiwi-button--warning.is-round {
  background: #f39c12;
  color: #ffffff;
  border-radius: 20px;
}
/* disabled样式 */
button:disabled {
  position: relative;
  border: none;
}
button:disabled::after {
  position: absolute;
  content: "";
  left: -2px;
  top: -2px;
  cursor: not-allowed;
  width: 105%;
  height: 111%;
  background: #fff;
  opacity: 0.5;
}
</style>