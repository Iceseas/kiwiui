<template>
  <div class="main_page_init">
    <p class="title_init title_2">Input 输入框</p>
    <p class="title_init title_4">通过鼠标或键盘输入字符</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">使用
      <span class="highlight_code">v-model</span>
      绑定已选中的变量
    </p>
    <div class="component_show_block">
      <kiwi-input v-model="data"/>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认输入框:
        &#60;kiwi-input v-model="data" /&#62;
        export default {
        data(){
          return {
            data: '',
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">禁用状态</p>
    <p class="title_init">使用
      <span class="highlight_code">disabled</span>
      禁用输入框
    </p>
    <div class="component_show_block">
      <kiwi-input v-model="data2" disabled />
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        禁用输入框:
        &#60;kiwi-input v-model="data" disabled /&#62;
      </pre>
    </div>
    <p class="title_init title_3">只读状态</p>
    <p class="title_init">使用
      <span class="highlight_code">readonly</span>
      使输入框为只读状态
    </p>
    <div class="component_show_block">
      <kiwi-input v-model="data3" readonly />
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        只读输入框:
        &#60;kiwi-input v-model="data" readonly /&#62;
      </pre>
    </div>
    <p class="title_init title_3">限制字数</p>
    <p class="title_init">使用
      <span class="highlight_code">maxlength</span>
      限制字数配合
      <span class="highlight_code">showWordLimit</span>
      使用，友好的显示
    </p>
    <div class="component_show_block">
      <kiwi-input v-model="data4" maxlength="30" showWordLimit />
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        限制字数输入框:
        &#60;kiwi-input 
          v-model="data" 
          maxlength="30" 
          showWordLimit /&#62;
      </pre>
    </div>
    <p class="title_init title_3">可清空</p>
    <p class="title_init">使用
      <span class="highlight_code">showClean</span>
      可显示可清空按钮
    </p>
    <div class="component_show_block">
      <kiwi-input v-model="data5" showClean />
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        可清空输入框:
        &#60;kiwi-input 
          v-model="data5" 
          showClean /&#62;
      </pre>
    </div>
    <p class="title_init title_3">密码框可查看</p>
    <p class="title_init">使用
      <span class="highlight_code">showPassword</span>
      可显示可查看密码
    </p>
    <div class="component_show_block">
      <kiwi-input v-model="data6" showPassword />
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        可清空输入框:
        &#60;kiwi-input 
          v-model="data6" 
          showPassword /&#62;
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
    <p class="title_init title_3">Radio Events</p>
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
          <td>input</td>
          <td>	在组件 Input 输入时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>	在组件 Input 失去焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>	在组件 Input 获得焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import kiwiInput from '../../../packages/Input/src/Input'
export default {
  data(){
    return {
      data: '',
      data2: '',
      data3: '',
      data4: '',
      data5: '',
      data6: '',
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: 'type',
          explain: '类型',
          type: 'string',
          items: '原生 input 的 type 值',
          default: 'text'
        },
        {
          name: 'v-model',
          explain: '绑定值',
          type: 'string / number',
          items: '-',
          default: '-'
        },
        {
          name: 'disabled',
          explain: '禁用状态',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'maxlength',
          explain: '原生maxlength属性',
          type: 'number',
          items: '-',
          default: '-'
        },
        {
          name: 'minlength',
          explain: '原生minlength属性',
          type: 'number',
          items: '-',
          default: '-'
        },
        {
          name: 'placeholder',
          explain: '输入框占位文本',
          type: 'striing',
          items: '-',
          default: '-'
        },
        {
          name: 'showWordLimit',
          explain: '显示限制最大字数，配合maxlength使用',
          type: 'Boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'readonly',
          explain: '只读，原生readonly属性',
          type: 'Boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'autofocus',
          explain: '原生属性，自动获取焦点',
          type: 'Boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'name',
          explain: '原生name属性',
          type: 'string',
          items: '-',
          default: '-'
        },
        {
          name: 'showPassword',
          explain: '显示密码',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
        {
          name: 'showClean',
          explain: '可清空',
          type: 'boolean',
          items: '-',
          default: 'false'
        },
      ]
    }
  },
  components:{
    kiwiInput,
  },  
}
</script>

<style scoped>

</style>