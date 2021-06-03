<template>
  <div class="main_page_init">
    <p class="title_init title_2">Link 链接</p>
    <p class="title_init title_4">文字超链接</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">使用
      <span class="highlight_code">type</span>
      来定义Link样式
    </p>
    <div class="component_show_block">
      <kiwi-link>默认连接</kiwi-link>
      <kiwi-link type="normal">普通链接</kiwi-link>
      <kiwi-link type="error">危险链接</kiwi-link>
      <kiwi-link type="success">成功链接</kiwi-link>
      <kiwi-link type="warning">警告链接</kiwi-link>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-link&#62;
        默认链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="normal"&#62;
        普通链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="error"&#62;
        危险链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="success"&#62;
        成功链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="warning"&#62;
        警告链接
        &#60;/kiwi-link&#62;
      </pre>
    </div>
    <p class="title_init title_3">接收url</p>
    <p class="title_init">使用
      <span class="highlight_code">href</span>
      来接收链接
    </p>
    <div class="component_show_block">
      <kiwi-link type="normal" href="http://www.baidu.com">百度一下</kiwi-link>
      <kiwi-link type="normal" href="https://blog.csdn.net/ICe_sea753">作者的CSDN</kiwi-link>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-link type="normal" href="http://www.baidu.com"&#62;百度一下&#60;/kiwi-link&#62;
        &#60;kiwi-link type="normal" href="https://blog.csdn.net/ICe_sea753"&#62;作者的CSDN&#60;/kiwi-link&#62;
      </pre>
    </div>
    <p class="title_init title_3">禁用状态</p>
    <p class="title_init">使用
      <span class="highlight_code">disabled</span>
      来定义链接禁用
    </p>
    <div class="component_show_block">
      <kiwi-link disabled>默认连接</kiwi-link>
      <kiwi-link type="normal" disabled>普通链接</kiwi-link>
      <kiwi-link type="error" disabled>危险链接</kiwi-link>
      <kiwi-link type="success" disabled>成功链接</kiwi-link>
      <kiwi-link type="warning" disabled>警告链接</kiwi-link>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-link disabled&#62;
        默认连接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="normal" disabled&#62;
        普通链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="error" disabled&#62;
        危险链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="success" disabled&#62;
        成功链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="warning" disabled&#62;
        警告链接
        &#60;/kiwi-link&#62;
      </pre>
    </div>
    <p class="title_init title_3">没有下划线</p>
    <p class="title_init">使用
      <span class="highlight_code">noUnderline</span>
      来定义没有下划线的样式
    </p>
    <div class="component_show_block">
      <kiwi-link noUnderline>默认连接</kiwi-link>
      <kiwi-link type="normal" noUnderline>普通链接</kiwi-link>
      <kiwi-link type="error" noUnderline>危险链接</kiwi-link>
      <kiwi-link type="success" noUnderline>成功链接</kiwi-link>
      <kiwi-link type="warning" noUnderline>警告链接</kiwi-link>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-link noUnderline&#62;
        默认连接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="normal" noUnderline&#62;
        普通链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="error" noUnderline&#62;
        危险链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="success" noUnderline&#62;
        成功链接
        &#60;/kiwi-link&#62;

        &#60;kiwi-link type="warning" noUnderline&#62;
        警告链接
        &#60;/kiwi-link&#62;
      </pre>
    </div>
    <p class="title_init title_3">Attributes</p>
    <table class="attributes_table">
      <thead>
        <tr>
          <td v-for="item in attributes_type" :key="item">{{ item }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="content in attributes_content" :key="content.name">
          <td>{{ content.name }}</td>
          <td>{{ content.explain }}</td>
          <td>{{ content.type }}</td>
          <td>{{ content.items }}</td>
          <td>{{ content.default }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import kiwiLink from '../../../packages/Link/src/Link'
export default {
  components:{
    kiwiLink
  },
  data(){
    return{
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: 'type',
          explain: '类型',
          type: 'string',
          items: 'normal/error/success/warning',
          default: '-'
        },
        {
          name: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'noUnderline',
          explain: '是否无下划线',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'target',
          explain: '原生target属性',
          type: 'string',
          items: '_blank/_parent/_self/_top/framename',
          default: '_blank'
        },
        {
          name: 'href',
          explain: '原生href属性',
          type: 'string',
          items: '-',
          default: '-'
        }
      ]
    } 
  },
}
</script>

<style scoped>

</style>