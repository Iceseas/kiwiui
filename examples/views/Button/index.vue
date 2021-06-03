<template>
  <div class="main_page_init">
    <p class="title_init title_2">Button 按钮</p>
    <p class="title_init title_4">常用的操作按钮</p>
    <p class="title_init title_3">展示</p>
    <p class="title_init title_4">常用操作按钮</p>
    <p class="title_init">使用
      <span class="highlight_code">type</span>
      <span class="highlight_code">plain</span>
      <span class="highlight_code">round</span>
      属性来定义Button样式
    </p>
    <div class="component_show_block">
      <kiwi-button>默认按钮</kiwi-button>
      <kiwi-button type="default">普通按钮</kiwi-button>
      <kiwi-button type="error">危险按钮</kiwi-button>
      <kiwi-button type="success">成功按钮</kiwi-button>
      <kiwi-button type="warning">警告按钮</kiwi-button>
      <kiwi-button plain>朴素按钮</kiwi-button>
      <kiwi-button type="default" plain>普通按钮</kiwi-button>
      <kiwi-button type="error" plain>危险按钮</kiwi-button>
      <kiwi-button type="success" plain>成功按钮</kiwi-button>
      <kiwi-button type="warning" plain>警告按钮</kiwi-button>
      <kiwi-button round>默认按钮</kiwi-button>
      <kiwi-button type="default" round>普通按钮</kiwi-button>
      <kiwi-button type="error" round>危险按钮</kiwi-button>
      <kiwi-button type="success" round>成功按钮</kiwi-button>
      <kiwi-button type="warning" round>警告按钮</kiwi-button>
      <kiwi-button plain round>朴素按钮</kiwi-button>
      <kiwi-button type="default" plain round>普通按钮</kiwi-button>
      <kiwi-button type="error" plain round>危险按钮</kiwi-button>
      <kiwi-button type="success" plain round>成功按钮</kiwi-button>
      <kiwi-button type="warning" plain round>警告按钮</kiwi-button>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-button type="default"&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error"&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success"&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning"&#62;
        警告按钮
        &#60;/kiwi-button&#62;

        朴素按钮
        &#60;kiwi-button type="default" plain&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" plain&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" plain&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning" plain&#62;
        警告按钮
        &#60;/kiwi-button&#62;

        默认圆角按钮
        &#60;kiwi-button type="default" round&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" round&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" round&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning" round&#62;
        警告按钮
        &#60;/kiwi-button&#62;

        朴素圆角按钮
        &#60;kiwi-button type="default" plain round&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" plain round&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" plain round&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning" plain round&#62;
        警告按钮
        &#60;/kiwi-button&#62;
      </pre>
    </div>
    <p class="title_init title_3">禁用状态</p>
    <p class="title_init">你可以使用
      <span class="highlight_code">disabled</span>
      属性来定义按钮是否可用，它接受一个
      <span class="highlight_code">Boolean</span>
      值。
    </p>
    <div class="component_show_block">
      <kiwi-button disabled>默认按钮</kiwi-button>
      <kiwi-button type="default" disabled>普通按钮</kiwi-button>
      <kiwi-button type="error" disabled>危险按钮</kiwi-button>
      <kiwi-button type="success" disabled>成功按钮</kiwi-button>
      <kiwi-button type="warning" disabled>警告按钮</kiwi-button>
      <kiwi-button plain disabled>朴素按钮</kiwi-button>
      <kiwi-button type="default" plain disabled>普通按钮</kiwi-button>
      <kiwi-button type="error" plain disabled>危险按钮</kiwi-button>
      <kiwi-button type="success" plain disabled>成功按钮</kiwi-button>
      <kiwi-button type="warning" plain disabled>警告按钮</kiwi-button>
      <kiwi-button round disabled>默认按钮</kiwi-button>
      <kiwi-button type="default" round disabled>普通按钮</kiwi-button>
      <kiwi-button type="error" round disabled>危险按钮</kiwi-button>
      <kiwi-button type="success" round disabled>成功按钮</kiwi-button>
      <kiwi-button type="warning" round disabled>警告按钮</kiwi-button>
      <kiwi-button plain round disabled>朴素按钮</kiwi-button>
      <kiwi-button type="default" plain round disabled>普通按钮</kiwi-button>
      <kiwi-button type="error" plain round disabled>危险按钮</kiwi-button>
      <kiwi-button type="success" plain round disabled>成功按钮</kiwi-button>
      <kiwi-button type="warning" plain round disabled>警告按钮</kiwi-button>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-button type="default" disabled&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" disabled&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" disabled&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning" disabled&#62;
        警告按钮
        &#60;/kiwi-button&#62;

        朴素按钮
        &#60;kiwi-button type="default" plain disabled&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" plain disabled&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" plain disabled&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning" plain disabled&#62;
        警告按钮
        &#60;/kiwi-button&#62;

        默认圆角按钮
        &#60;kiwi-button type="default" round disabled&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" round disabled&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" round disabled&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning" round disabled&#62;
        警告按钮
        &#60;/kiwi-button&#62;

        朴素圆角按钮
        &#60;kiwi-button type="default" plain round disabled&#62;
        普通按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" plain round disabled&#62;
        危险按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" plain round disabled&#62;
        成功按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="warning" plain round disabled&#62;
        警告按钮
        &#60;/kiwi-button&#62;
      </pre>
    </div>
    <p class="title_init title_3">尺寸</p>
    <p class="title_init">提供了三种尺寸，你可以使用
      <span class="highlight_code">size</span>
      属性来定义按钮的大小
    </p>
    <div class="component_show_block">
      <kiwi-button type="default">默认大小</kiwi-button>
      <kiwi-button type="default" size="small">小按钮</kiwi-button>
      <kiwi-button type="default" size="huge">大按钮</kiwi-button>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-button type="default"&#62;
        默认大小
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="error" size="small"&#62;
        小按钮
        &#60;/kiwi-button&#62;

        &#60;kiwi-button type="success" size="huge"&#62;
        大按钮
        &#60;/kiwi-button&#62;
        
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
    <p class="title_init title_3">Events</p>
    <table class="attributes_table">
      <thead>
        <tr>
          <td>事件名称</td>
          <td>说明</td>
          <td>回调参数</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击按钮时触发的回调函数</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import kiwiButton from '../../../packages/Button/src/Button';
export default {
  components:{
    kiwiButton
  },
  data(){
    return{
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: 'type',
          explain: '类型',
          type: 'string',
          items: 'default/error/success/warning',
          default: '-'
        },
        {
          name: 'plain',
          explain: '是否为朴素按钮',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'round',
          explain: '是否为圆角按钮',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'size',
          explain: '按钮大小',
          type: 'string',
          items: 'samll/normal/huge',
          default: 'normal'
        },
        {
          name: 'nativeType',
          explain: '原生type属性',
          type: 'string',
          items: 'button/submit/reset',
          default: 'button'
        }
      ]
    } 
  },
}
</script>

<style scoped>

</style>