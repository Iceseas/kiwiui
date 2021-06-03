<template>
  <div class="main_page_init">
    <p class="title_init title_2">Select 选择框</p>
    <p class="title_init title_4">当选项过多时，使用下拉菜单展示并选择内容。</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">
      <span class="highlight_code">v-model</span>
      为当前选定的
      <span class="highlight_code">:kw-options</span>
      的 value 属性值
    </p>
    <div class="component_show_block">
      <kiwi-select v-model="data" :kw-options="options"></kiwi-select>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
      默认选择框:
      &#60;kiwi-select v-model="data" :kw-options="options" &#62;
      &#60;/kiwi-select&#62;
      export default {
        data(){
          return {
            data:'',
            options: ['北京烤鸭',
                      '京酱肉丝',
                      '番茄炒蛋',
                      '水煮牛肉',
                      '地三鲜',
                      '凉拌黄瓜']
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">禁用状态</p>
    <p class="title_init">使用
      <span class="highlight_code">disabled</span>
      禁用选择框
    </p>
    <div class="component_show_block">
      <kiwi-select v-model="data" disabled></kiwi-select>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        禁用选择框:
        &#60;kiwi-select v-model="data" disabled &#62; 
        &#60;/kiwi-select&#62;
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
          <td>change</td>
          <td>选中值发生变化时触发</td>
          <td>目前的选中值</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>Select聚焦时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>inputFocus</td>
          <td>input聚焦时触发</td>
          <td>(event: Event)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import kiwiSelect from '../../../packages/Select/src/Select'
export default {
  components:{
    kiwiSelect
  },
  data(){
    return {
      data: '',
      options: ['北京烤鸭','京酱肉丝','番茄炒蛋','水煮牛肉','地三鲜','凉拌黄瓜'],
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: ':kw-options',
          explain: '下拉框的各选项',
          type: 'Array',
          items: '-',
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
          name: 'value / v-model',
          explain: '绑定值',
          type: 'string / number / boolean',
          items: '-',
          default: '-'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>