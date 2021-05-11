<template>
  <div class="main_page_init">
    <p class="title_init title_2">Radio 单选框</p>
    <p class="title_init title_4">在一组备选项中进行单选</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
    <div class="component_show_block">
      <kiwi-radio v-model="radioVal" val="a"></kiwi-radio> 
      <kiwi-radio v-model="radioVal" val="b"></kiwi-radio> 
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-radio v-model="radioVal" val="a"&#62;&#60;/kiwi-radio&#62;
        &#60;kiwi-radio v-model="radioVal" val="b"&#62;&#60;/kiwi-radio&#62;
        export default {
          data(){
            return {
              radioVal: 'a',
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
      <kiwi-radio v-model="radioVall" val="a" disabeld></kiwi-radio> 
      <kiwi-radio v-model="radioVall" val="b" disabeld></kiwi-radio> 
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-radio v-model="radioVal" val="a" disabeld&#62;&#60;/kiwi-radio&#62;
        &#60;kiwi-radio v-model="radioVal" val="b" disabeld&#62;&#60;/kiwi-radio&#62;
        export default {
          data(){
            return {
              radioVal: 'b',
            }
          }
        }
      </pre>
    </div>
    <p class="title_init title_3">自定义选项</p>
    <div class="component_show_block">
      <kiwi-radio v-model="radioVall" val="a">男生</kiwi-radio> 
      <kiwi-radio v-model="radioVall" val="b">女生</kiwi-radio> 
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认按钮:
        &#60;kiwi-radio v-model="radioVal" val="a"&#62;男生&#60;/kiwi-radio&#62;
        &#60;kiwi-radio v-model="radioVal" val="b"&#62;女生&#60;/kiwi-radio&#62;
        export default {
          data(){
            return {
              radioVal: 'a',
            }
          }
        }
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
          <td>绑定值变化时触发的事件</td>
          <td>选中的 Radio val 值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import kiwiRadio from '../../../packages/Radio/src/Radio'
export default {
  components:{
    kiwiRadio
  },
  data(){
    return {
      radioVal: 'a',
      radioVall: 'a',
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: 'val',
          explain: 'Radio 自身的值',
          type: 'string / number / boolean',
          items: '-',
          default: '-'
        },
        {
          name: 'value / v-model',
          explain: '绑定值',
          type: 'string / number / boolean',
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
}
</script>

<style scoped>

</style>