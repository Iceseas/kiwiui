<template>
  <div class="main_page_init">
    <p class="title_init title_2">Icon 图标</p>
    <p class="title_init title_4">提供了一套常用的图标集合。</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">
      使用
      <span class="highlight_code">name</span>
      来指定icon的样式
    </p>
    <div class="component_show_block">
      <kiwi-icon name="kiwi-icon-scan2" />
      <kiwi-icon name="kiwi-icon-plus" />
      <kiwi-icon name="kiwi-icon-decrease" />
      <kiwi-icon name="kiwi-icon-correct" />
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认输入框:
        &#60;kiwi-icon name="kiwi-icon-scan2" /&#62;
        &#60;kiwi-icon name="kiwi-icon-plus" /&#62;
        &#60;kiwi-icon name="kiwi-icon-decrease" /&#62;
        &#60;kiwi-icon name="kiwi-icon-correct" /&#62;
      </pre>
    </div>
    <p class="title_init title_2">图标集合</p>
    <div class="icon-show-block">
      <div class="icon-card" v-for="item in iconlist" :key="item">
        <div style="text-align:center;font-size:14px;font-weight:600">
          <kiwi-icon :name="item" />
          <p class="icon-name">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import kiwiIcon from "../../../packages/Icon/src/Icon";
export default {
  components: {
    kiwiIcon,
  },
  data() {
    return {
      iconlist: [
        "kiwi-icon-plus",
        "kiwi-icon-decrease",
        "kiwi-icon-correct",
        "kiwi-icon-left",
        "kiwi-icon-right",
        "kiwi-icon-up",
        "kiwi-icon-down",
        "kiwi-icon-clock",
        "kiwi-icon-menu",
        "kiwi-icon-company",
        "kiwi-icon-camera",
        "kiwi-icon-bookmark",
        "kiwi-icon-coupon",
        "kiwi-icon-sign-in",
        "kiwi-icon-message",
        "kiwi-icon-position",
        "kiwi-icon-warning",
        "kiwi-icon-view",
        "kiwi-icon-options",
        "kiwi-icon-user",
        "kiwi-icon-find",
        "kiwi-icon-loupe",
        "kiwi-icon-collect",
        "kiwi-icon-share",
        "kiwi-icon-home",
        "kiwi-icon-video",
        "kiwi-icon-loading",
        "kiwi-icon-copy",
        "kiwi-icon-download",
        "kiwi-icon-password",
        "kiwi-icon-scan",
        "kiwi-icon-edit",
        "kiwi-icon-pc",
        "kiwi-icon-phone",
        "kiwi-icon-safe",
        "kiwi-icon-shopcar",
        "kiwi-icon-video2",
        "kiwi-icon-vip",
        "kiwi-icon-message2",
        "kiwi-icon-position2",
        "kiwi-icon-home2",
        "kiwi-icon-options2",
        "kiwi-icon-coupon2",
        "kiwi-icon-share2",
        "kiwi-icon-edit2",
        "kiwi-icon-collect2",
        "kiwi-icon-camera2",
        "kiwi-icon-collect3",
        "kiwi-icon-message3",
        "kiwi-icon-menu2",
        "kiwi-icon-scan2",
        "kiwi-icon-signin2",
      ],
    };
  },
  methods:{
  }
};
</script>

<style scoped>
.icon-show-block {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.icon-card {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  padding: 20px;
}
.icon-card:hover{
  transform: scale(1.1);
  border: none;
  transition: 0.5s;
}
.icon-name{
  font-size: 14px;
  font-weight: 300;
}
</style>