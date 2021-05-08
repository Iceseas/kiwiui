<template>
  <div class="main_page_init">
    <p class="title_init title_2">更新日志</p>
    <div class="component_show_block">
      <p class="title_init title_2">0.0.6</p>
      <p class="title_init title_3">bug修复：</p>
      <p class="list_style">修复了引入ui框架模块后报
        <span class="highlight_code">TypeError: Cannot read property 'toLowerCase' of undefined</span>
        的错误
      </p>
      <p class="title_init title_3">优化：</p>
      <p class="list_style">
        <span class="highlight_code">kiwi-input</span>
        <span class="highlight_code">kiwi-select</span>
        调整样式
      </p>
      <p class="list_style">
        <span class="highlight_code">kiwi-select</span>
        增加没有选项的处理
      </p>
      <p class="list_style">
        借用<span class="highlight_code">element</span>的<span class="highlight_code">clickoutside</span>自定义指令
        <span class="highlight_code">kiwi-select</span>新增点击组件外侧事件(学习中。。先拿来使用)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>