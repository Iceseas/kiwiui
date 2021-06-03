<template>
  <div class="main_page_init">
    <p class="title_init title_2">Checkbox 多选框</p>
    <p class="title_init title_4">一组备选项中进行多选</p>
    <p class="title_init title_3">单独使用</p>
    <p class="title_init">单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
    <div class="component_show_block">
      <kiwi-checkbox v-model="checked1"></kiwi-checkbox> 
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认使用：
        &#60;kiwi-checkbox v-model="checked1"&#62;
        &#60;/kiwi-checkbox&#62;
        export default {
          data(){
            return {
              checked1: false,
            }
          }
        }
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
      <kiwi-checkbox v-model="checked1" disabled></kiwi-checkbox> 
      <kiwi-checkbox v-model="checked2" disabled></kiwi-checkbox> 
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认使用：
        &#60;kiwi-checkbox v-model="checked1" disabled&#62;
        &#60;/kiwi-checkbox&#62;

        &#60;kiwi-checkbox v-model="checked2" disabled&#62;
        &#60;/kiwi-checkbox&#62;
        export default {
          data(){
            return {
              checked1: false,
              checked2: true,
            }
          }
        }
      </pre>
    </div>
    <p class="title_init title_3">自定义选项</p>
    <div class="component_show_block">
      <kiwi-checkbox v-model="checked3">篮球</kiwi-checkbox> 
      <kiwi-checkbox v-model="checked4">足球</kiwi-checkbox> 
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        自定选项：
        &#60;kiwi-checkbox v-model="checked3"&#62;
        篮球
        &#60;/kiwi-checkbox&#62;

        &#60;kiwi-checkbox v-model="checked4"&#62;
        足球
        &#60;/kiwi-checkbox&#62;
        export default {
          data(){
            return {
              checked3: false,
              checked4: true,
            }
          }
        }
      </pre>
    </div>
    <p class="title_init title_3">多选框组</p>
    <p class="title_init">结合
      <span class="highlight_code">kiwi-checkbox-group</span>
      标签和子元素
      <span class="highlight_code">kiwi-checkbox</span>，
      <span class="highlight_code">val</span>为绑定的值
      只需要在
      <span class="highlight_code">kiwi-checkbox-group</span>
      绑定
      <span class="highlight_code">v-model</span>会返回一个数组
    </p>
    <div class="component_show_block">
      <kiwi-checkbox-group v-model="checkboxGroupValue">
        <kiwi-checkbox val="a">选项1</kiwi-checkbox> 
        <kiwi-checkbox val="b">选项2</kiwi-checkbox> 
      </kiwi-checkbox-group>
      打印绑定的checkboxGroupValue值：
      {{ checkboxGroupValue }}
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        单选框组:
        &#60;kiwi-checkbox-group v-model="checkboxGroupValue"&#62;
          &#60;kiwi-checkbox val="a"&#62;
          选项1
          &#60;/kiwi-checkbox&#62;

          &#60;kiwi-checkbox val="b"&#62;
          选项2
          &#60;/kiwi-checkbox&#62;
        &#60;/kiwi-checkbox-group&#62;
        export default {
          data(){
            return {
              checkboxGroupValue: [],
            }
          }
        }
      </pre>
    </div>
    <p class="title_init title_3">Checkbox Attributes</p>
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
    <p class="title_init title_3">Checkbox Events</p>
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
          <td>绑定值变化时触发的事件</td>
          <td>选中的 Checkbox val 值</td>
        </tr>
      </tbody>
    </table>
    <p class="title_init title_3">Checkbox-group Attributes</p>
    <table class="attributes_table">
      <thead>
        <tr>
          <td v-for="item in attributes_type" :key="item">{{ item }}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value / v-model</td>
          <td>选中一组多选框的绑定值</td>
          <td>Array</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <p class="title_init title_3">Checkbox Events</p>
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
          <td>groupChange</td>
          <td>绑定值变化时触发的事件</td>
          <td>选中的 Checkbox val 值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import kiwiCheckbox from '../../../packages/Checkbox/src/Checkbox'
import kiwiCheckboxGroup from '../../../packages/Checkbox/src/CheckBoxGroup'
export default {
  components:{
    kiwiCheckbox,
    kiwiCheckboxGroup
  },
  data(){
    return {
      checked1: false,
      checked2: true,
      checked3: false,
      checked4: true,
      checkboxGroupValue: [],
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: 'val',
          explain: '结合kiwi-checkbox-group使用时子复选框绑定的值',
          type: 'string / number / boolean',
          items: '-',
          default: '-'
        },
        {
          name: 'value / v-model',
          explain: 'kiwi-checkbox单独使用时的绑定值',
          type: 'boolean',
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
          name: 'name',
          explain: '原生name值',
          type: 'string',
          items: '-',
          default: '-'
        }
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>