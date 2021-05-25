<template>
  <div class="main_page_init">
    <p class="title_init title_2">Switch 切换开关</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">
      <span class="highlight_code">v-model</span>
      为Boolean值
    </p>
    <div class="component_show_block">
      <kiwi-switch v-model="isOpen"></kiwi-switch>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认穿梭框:
        &#60;kiwi-switch v-model="isOpen"&#62; &#60;/kiwi-switch&#62;
        export default {
        data(){
          return {
            isOpen: true
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">自定义title</p>
    <p class="title_init">
      你可以传入
      <span class="highlight_code">left-title</span>
      和
      <span class="highlight_code">right-title</span>
      定义左边和右边的title值
    </p>
    <div class="component_show_block">
      <kiwi-switch left-title="关闭" right-title="开启" v-model="isOpen2"></kiwi-switch>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认穿梭框:
        &#60;kiwi-switch left-title="关闭" right-title="开启" v-model="isOpen2"&#62; &#60;/kiwi-switch&#62;
        export default {
        data(){
          return {
            isOpen2: true
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
  </div>
</template>

<script>
import kiwiSwitch from '../../../packages/Switch/src/Switch'
export default {
  data(){
    return {
      isOpen: true,
      isOpen2: true,
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: ':left-title',
          explain: '左边title值',
          type: 'String',
          items: '-',
          default: '-'
        },
        {
          name: ':right-title',
          explain: '右边title值',
          type: 'String',
          items: '-',
          default: '-'
        },
        {
          name: 'value / v-model',
          explain: '绑定值',
          type: 'Boolean',
          items: '-',
          default: '-'
        },
      ]
    }
  },
  components:{
    kiwiSwitch
  },
}
</script>

<style scoped>

</style>