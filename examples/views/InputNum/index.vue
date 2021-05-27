<template>
  <div class="main_page_init">
    <p class="title_init title_2">Input-num 计数器</p>
    <p class="title_init title_4">仅允许输入标准的数字值，可定义范围</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">使用
      <span class="highlight_code">v-model</span>
      绑定number类型的变量
    </p>
    <div class="component_show_block">
      <kiwi-input-num v-model="num"></kiwi-input-num>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认计数器:
        &#60;kiwi-input v-model="num" /&#62;
        export default {
        data(){
          return {
            num: 1,
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">禁用模式</p>
    <p class="title_init">使用
      <span class="highlight_code">disabled</span>
      禁用计数器
    </p>
    <div class="component_show_block">
      <kiwi-input-num v-model="num2" disabled></kiwi-input-num>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        禁用计数器:
        &#60;kiwi-input v-model="num2" disabled/&#62;
        export default {
        data(){
          return {
            num2: 1,
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">步数</p>
    <p class="title_init">向
      <span class="highlight_code">step</span>
      传递一个
      <span class="highlight_code">number</span>
      值
    </p>
    <div class="component_show_block">
      <kiwi-input-num v-model="num3" :step="3"></kiwi-input-num>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        定义步数:
        &#60;kiwi-input v-model="num3" :step="3"/&#62;
        export default {
        data(){
          return {
            num3: 1,
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">只读</p>
    <p class="title_init">使用属性
      <span class="highlight_code">readonly</span>
      将中间输入框变为只读模式
    </p>
    <div class="component_show_block">
      <kiwi-input-num v-model="num4" readonly></kiwi-input-num>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        只读计数器:
        &#60;kiwi-input v-model="num4" readonly/&#62;
        export default {
        data(){
          return {
            num4: 1,
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
import kiwiInputNum from '../../../packages/Input/src/InputNum'
export default {
  data(){
    return{
      num: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
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
          name: ':maxNum',
          explain: '限制最大值',
          type: 'number',
          items: '-',
          default: '10'
        },
        {
          name: ':minNum',
          explain: '限制最小值',
          type: 'number',
          items: '-',
          default: '1'
        },
        {
          name: ':step',
          explain: '每次增加或减少的值',
          type: 'number',
          items: '-',
          default: '1'
        },
        {
          name: 'readonly',
          explain: '只读，原生readonly属性',
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
        }
      ]
    }
  },
  components:{
    kiwiInputNum
  },
  methods:{
  }
}
</script>

<style scoped>

</style>