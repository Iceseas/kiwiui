<template>
  <a 
    :href="disabled? 'javascript:void(0)': href"
    :target="disabled? '': target"
    :class="[
      'link_init',
      type ? 'kiwi-link--' + type : '',
      {
        'is-disabled': disabled,
        'is-noUnderline': noUnderline
      },
    ]"
    @click="handleLinkClick">
    <template v-if="!$slots.default">{{ label }}</template>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "kiwi-link",
  props:{
    href: {
      type: String,
      default: ''
    },
    label:{
      type: String,
      default: 'link链接'
    },
    type: {
      type:String,
      default: 'default'
    },
    target: {
      type: String,
      default: '_blank'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    noUnderline: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    handleLinkClick(e){
      if(this.disabled === false) {
        this.$emit("click", e);
      } else {
        return;
      }
    }
  }
}
</script>

<style scoped>
.link_init{
  display: inline-block;
  margin: 0 5px;
  font-size: 12px;
  padding-bottom: 1px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
}
.link_init:hover{
  border-bottom: 1px solid #409EFF;
  transition: 0.2s;
  color: #409EFF;
}
/* disabled状态 */
.kiwi-link--default.is-disabled,
.kiwi-link--normal.is-disabled,
.kiwi-link--success.is-disabled,
.kiwi-link--error.is-disabled,
.kiwi-link--warning.is-disabled{
  opacity: 0.5;
}
/* disabled状态 */
.kiwi-link--default.is-disabled:hover{
  color: #909399;
}
.kiwi-link--default.is-disabled:hover,
.kiwi-link--normal.is-disabled:hover,
.kiwi-link--success.is-disabled:hover,
.kiwi-link--error.is-disabled:hover,
.kiwi-link--warning.is-disabled:hover{
  cursor: not-allowed;
  border-bottom: 1px solid transparent;
}
/* noUnderline */
.kiwi-link--default.is-noUnderline:hover,
.kiwi-link--normal.is-noUnderline:hover,
.kiwi-link--success.is-noUnderline:hover,
.kiwi-link--error.is-noUnderline:hover,
.kiwi-link--warning.is-noUnderline:hover{
  border-bottom: 1px solid transparent;
}
/* 默认连接 */
.kiwi-link--default {
  color: #909399;
}
/* 普通连接 */
.kiwi-link--normal {
  color: #409EFF;
}
/* 成功连接 */
.kiwi-link--success {
  color: #7ad6a1;
}
/* 成功连接hover */
.kiwi-link--success:hover {
  border-bottom: 1px solid #7ad6a1;
  color: #7ad6a1;
}
/* 危险连接 */
.kiwi-link--error {
  color: #eb2f06;
}
/* 危险连接hover */
.kiwi-link--error:hover {
  border-bottom: 1px solid #eb2f06;
  color: #eb2f06;
}
/* 警告连接 */
.kiwi-link--warning {
  color: #f39c12;
}
/* 警告连接hover */
.kiwi-link--warning:hover {
  border-bottom: 1px solid #f39c12;
  color: #f39c12;
}
</style>