<template>
  <label
    id="kiwi-select--id"
    v-clickoutside="handleCloseOpions"
    :class="[
      'kiwi-select--init',
      focusBorder
        ? 'kiwi-select--box_nohver'
        : disabled
        ? 'kiwi-select--box_nohver'
        : 'kiwi-select--box',
      {
        'is-focus-border': disabled ? false : focusBorder,
        'is-blur-border': disabled ? false : blurBorder,
        'is-disabled': disabled,
      },
    ]"
    @click="disabled ? '' : handleSelectFocus($event)"
  >
    <div class="kiwi-select-inlinebox">
      <div class="dell_select_flex">
        <input
          ref="input"
          type="text"
          :disabled="false"
          :autofocus="false"
          :name="name"
          :readonly="filterable ? false : true"
          v-model="model"
          class="input_init"
          placeholder="请选择"
          @focus="disabled ? '' : handleInputFocus($event)"
          @blur="disabled ? '' : handleInputBlur($event)"
        />
      </div>
      <i
        :class="[
          'iconfont' + '',
          'icon-arrow-down' + '',
          'rotate-icon' + '',
          {
            'rotate-down': showOptions,
          },
        ]"
      ></i>
      <div class="kiwi-select--else" v-if="showClean"></div>
    </div>
    <!-- 下拉框显示 -->
    <div
      v-if="kwOptions && kwOptions.length > 0"
      :class="[
        'kiwi-select--options',
        showOptions ? 'show-options' : 'close-options',
      ]"
    >
      <div class="kiwi-select--content">
        <div
          v-for="item in kwOptions"
          :key="item"
          class="kiwi-select--item"
          @click.stop="disabled ? '' : handleClickItem($event)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div
     v-else-if="!kwOptions || kwOptions.length == 0"
      :class="[
        'kiwi-select--options',
        showOptions
          ? 'show-none-options'
          : 'close-none-options',
      ]"
    >
      <div class="kiwi-select--content">
        <div
          class="kiwi-select--item"
          @click.stop="disabled ? '' : handleClickItem('none')"
        >
          无内容
        </div>
      </div>
    </div>
  </label>
</template>

<script>
import clickoutside from "../../../utils/clickoutside";
export default {
  name: "kiwi-select",
  directives: { clickoutside },
  data() {
    return {
      focusBorder: false,
      blurBorder: false,
      showOptions: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
  props: {
    showClean: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    kwOptions: Array,
    val: {},
    value: {},
    name: String,
  },
  methods: {
    // 输入框聚焦--如果输入框聚焦控制样式
    handleInputFocus(e) {
      this.focusBorder = true;
      this.blurBorder = false;
      this.$emit("inputFocus", e);
    },
    // 输入框失焦
    handleInputBlur(e) {
      if (this.filterable == true) {
        this.handleCloseOpions();
        this.focusBorder = false;
        this.blurBorder = true;
        this.$emit("inputBlur", e);
      }
    },
    // 关闭下拉框
    handleCloseOpions() {
      this.showOptions = false;
      this.focusBorder = false;
      this.blurBorder = true;
    },
    // 点击选择框聚焦
    handleSelectFocus(e) {
      // 处理点击选择框展开再点开选择框关闭
      if (this.showOptions == false) {
        this.showOptions = true;
      } else {
        this.showOptions = false;
      }
      if (this.filterable == true) {
        this.$refs.input.focus();
        this.handleInputFocus();
      }
      this.$emit("focus", e);
    },
    handleClickItem(e) {
      if (e === "none") {
        this.$emit("input", "");
        this.$emit("change", "");
      } else {
        e.path[1].scrollTop = 0;
        e.stopPropagation();
        this.$emit("input", e.target.outerText);
        this.$emit("change", e.target.outerText);
      }
    },
  },
};
</script>

<style scoped>
@import "../../../examples/assets/iconfont/iconfont.css";

.kiwi-select--init {
  position: relative;
  cursor: pointer;
  background: #fff;
  z-index: 999;
}
/* 下拉框样式 */
.kiwi-select--options {
  position: absolute;
  left: 0;
  top: 40px;
  padding: 5px 0;
  height: 0px;
  opacity: 0;
  width: 190px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
}
.kiwi-select--content {
  width: 110%;
  box-sizing: border-box;
  max-height: 190px;
  position: relative;
  overflow: auto;
}
.kiwi-select--content::after {
  position: absolute;
  content: "";
  left: 20%;
  top: -7px;
  background: transparent;
  width: 0;
  height: 0;
  border-bottom: 7px solid #fff;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
}
.show-options {
  opacity: 1;
  height: 200px;
  transition: 0.4s;
}
.close-options {
  height: 0px;
  transition: 0.4s;
  padding: 0;
}
.show-none-options {
  opacity: 1;
  height: 45px;
  transition: 0.4s;
}
.close-none-options {
  height: 0px;
  transition: 0.4s;
  padding: 0;
}
/* 各选项的样式 */
.kiwi-select--item {
  text-align: center;
  line-height: 35px;
  width: 190px;
  box-sizing: border-box;
  font-size: 12px;
  color: #606266;
}
.kiwi-select--item:hover {
  transition: 0.2s;
  background: #f2f6fc;
}
/* 基本样式 */
.kiwi-select--box_nohver,
.kiwi-select--box {
  width: 190px;
  height: 35px;
  display: inline-block;
  line-height: 28px;
  box-sizing: border-box;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  position: relative;
}
/* 内flex盒子 */
.kiwi-select-inlinebox {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
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
.kiwi-select--box:hover {
  border: 1px solid #909399;
  transition: 1s;
}
/* focus样式 */
.kiwi-select--box_nohver.is-focus-border,
.kiwi-select--box.is-focus-border {
  border: 1px solid #409eff;
  transition: 0.5s;
}
/* blur样式 */
.kiwi-select--box_nohver.is-blur-border,
.kiwi-select--box.is-blur-border {
  border: 1px solid #e4e7ed;
  transition: 0.5s;
}
/* 取消input的样式 */
.input_init {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  z-index: -2;
}
/* 处理input flex 1失效问题 */
.dell_select_flex {
  flex: 1;
  line-height: 18px;
}
/* 其他功能 */
.kiwi-select--else {
  display: block;
  width: 27%;
  text-align: right;
  box-sizing: border-box;
  height: 100%;
  line-height: 16px;
  font-weight: 600;
  font-size: 12px;
}
.rotate-icon {
  font-size: 12px;
  position: absolute;
  right: 10px;
  z-index: -1;
  transition: 0.5s;
  transform: rotate(-180deg);
  height: 100%;
  line-height: 35px;
}
.rotate-down {
  transform: rotate(0deg);
  transition: 0.5s;
}
</style>