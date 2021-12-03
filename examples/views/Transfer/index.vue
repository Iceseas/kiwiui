<template>
  <div class="main_page_init">
    <p class="title_init title_2">Transfer 穿梭框</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">
      <span class="highlight_code">v-model</span>
      为当前选定的
      <span class="highlight_code">:list</span>
      的元素值
    </p>
    <div class="component_show_block">
      <kiwi-transfer v-model="dataArr" :list="list"></kiwi-transfer>
      <kiwi-button @click="handleShow">show</kiwi-button>
      <kiwi-button @click="handleChange">change</kiwi-button>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认穿梭框:
        &#60;kiwi-transfer v-model="dataArr" :list="list"&#62; &#60;/kiwi-transfer&#62;
        export default {
        data(){
          return {
            dataArr: [],
            list:[
              { label : '选项1', key: 1, value: 'one', disabled: false },
              { label : '选项2', key: 2, value: 'two', disabled: false },
              { label : '选项3', key: 3, value: 'three', disabled: false },
              { label : '选项4', key: 4, value: 'four', disabled: true },
              { label : '选项5', key: 5, value: 'five', disabled: false },
              { label : '选项6', key: 6, value: 'six',disabled: false },
              { label : '选项7', key: 7, value: 'seven',disabled: false },
              { label : '选项8', key: 8, value: 'eight',disabled: true },
              { label : '选项9', key: 9, value: 'nine',disabled: false },
              { label : '选项10', key: 10, value: 'ten',disabled: false },
              { label : '选项11', key: 11, value: 'eleven',disabled: false },
              { label : '选项12', key: 12, value: 'twlve',disabled: false },
            ]
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
import kiwiTransfer from '../../../packages/Transfer/src/Transfer'
export default {
  components: {
    kiwiTransfer
  },
  data(){
    return {
      dataArr: [],
      list:[
          { label : '选项1', key: 1, value: 'one', disabled: false },
          { label : '选项2', key: 2, value: 'two', disabled: false },
          { label : '选项3', key: 3, value: 'three', disabled: false },
          { label : '选项4', key: 4, value: 'four', disabled: true },
          { label : '选项5', key: 5, value: 'five', disabled: false },
          { label : '选项6', key: 6, value: 'six',disabled: false },
          { label : '选项7', key: 7, value: 'seven',disabled: false },
          { label : '选项8', key: 8, value: 'eight',disabled: true },
          { label : '选项9', key: 9, value: 'nine',disabled: false },
          { label : '选项10', key: 10, value: 'ten',disabled: false },
          { label : '选项11', key: 11, value: 'eleven',disabled: false },
          { label : '选项12', key: 12, value: 'twlve',disabled: false },
        ],
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: ':list',
          explain: '待选项',
          type: 'Array',
          items: '-',
          default: '-'
        },
        {
          name: 'value / v-model',
          explain: '绑定值',
          type: 'Array',
          items: '-',
          default: '-'
        },
      ]
    }
  },
  methods:{
    handleShow(){
      console.log(this.dataArr)
    },
    handleChange(){
      this.dataArr.push({
        disabled: false,
        key: 1,
        label: "选项1",
        value: "one"
      })
    }
  }
}
</script>

<style scoped>

</style>