<template>
  <div
    :class="[
      focusBorder
        ? 'kiwi-input--box_nohver'
        : disabled
        ? 'kiwi-input--box_nohver'
        : 'kiwi-input--box',
      {
        'is-focus-border': focusBorder,
        'is-blur-border': blurBorder,
        'is-disabled': disabled,
      },
    ]"
    @mousedown="disabled ? '' : handleMousedown()"
    @mouseleave="disabled ? '' : handleMouseleave()"
  >
    <div class="kiwi-input-inlinebox">
      <div class="dell_input_flex">
        <input
          ref="input"
          :type="showPassword ? 'password' : type"
          :disabled="disabled"
          :autofocus="autofocus"
          :name="name"
          :readonly="readonly"
          v-model="model"
          :maxlength="maxlength"
          :value="val"
          :class="['input_init', type ? 'kiwi-input--' + type : '']"
          :placeholder="placeholder"
          @input="disabled ? '' : handleInput($event)"
          @focus="disabled ? '' : handleInputFocus($event)"
          @blur="disabled ? '' : handleInputBlur($event)"
        />
      </div>
      <div
        class="kiwi-input--else"
        v-if="showPassword && !showClean && !showWordLimit"
      ></div>
      <div
        class="kiwi-input--else"
        v-if="showClean && !showWordLimit && !showPassword"
      ></div>
      <div
        class="kiwi-input--else"
        v-if="showWordLimit && !showClean && !showPassword"
      >
        {{ value.length }}/{{ maxlength }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kiwi-input",
  data() {
    return {
      focusBorder: false,
      blurBorder: false,
      noInputHover: false,
      nowLength: 0,
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showClean: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    maxlength: {
      default: 999,
    },
    val: {},
    value: {}
  },
  methods: {
    // 输入框聚焦--如果输入框聚焦控制样式
    handleInputFocus(e) {
      this.focusBorder = true;
      this.blurBorder = false;
      this.$emit("focus", e);
    },
    // 输入框失焦
    handleInputBlur(e) {
      this.focusBorder = false;
      this.blurBorder = true;
      this.$emit("blur", e);
    },
    // 输入事件
    handleInput(e) {
      this.$emit('input', e)
    },
    // 鼠标在输入框内点击左键--聚焦
    handleMousedown() {
      this.noInputHover = true;
    },
    // 鼠标离开输入框
    handleMouseleave() {
      this.noInputHover = false;
    },
  },
};
</script>

<style scoped>
/* 基本样式 */
.kiwi-input--box_nohver,
.kiwi-input--box {
  width: 190px;
  height: 35px;
  display: inline-block;
  line-height: 28px;
  box-sizing: border-box;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  position: relative;
  background: #fff;
}
/* 内flex盒子 */
.kiwi-input-inlinebox {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
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
/* hover样式 */
.kiwi-input--box:hover {
  border: 1px solid #909399;
  transition: 1s;
}
/* focus样式 */
.kiwi-input--box_nohver.is-focus-border,
.kiwi-input--box.is-focus-border {
  border: 1px solid #409eff;
  transition: 0.5s;
}
/* blur样式 */
.kiwi-input--box_nohver.is-blur-border,
.kiwi-input--box.is-blur-border {
  border: 1px solid #e4e7ed;
  transition: 0.5s;
}
/* 取消input的样式 */
.input_init {
  width: 100%;
  border: none;
  outline: none;
  background: none;
}
/* 处理input flex 1失效问题 */
.dell_input_flex {
  flex: 1;
  line-height: 23px;
}
input::-webkit-input-placeholder {
  color: #d4d5d6;
} /* 使用webkit内核的浏览器 */
input:-moz-placeholder {
  color: #d4d5d6;
} /* Firefox版本4-18 */
input::-moz-placeholder {
  color: #d4d5d6;
} /* Firefox版本19+ */
input:-ms-input-placeholder {
  color: #d4d5d6;
} /* IE浏览器 */
/* 其他功能 */
.kiwi-input--else {
  display: block;
  width: 27%;
  text-align: right;
  box-sizing: border-box;
  height: 100%;
  line-height: 21px;
  font-weight: 600;
  font-size: 12px;
}
</style>