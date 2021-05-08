<template>
  <div class="main_page_init">
    <p class="title_init title_2">Radio 单选</p>
    <p class="title_init title_4">在一组备选项中进行单选</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">使用
      <span class="highlight_code">v-model</span>
      绑定已选中的变量
      <span class="highlight_code">label</span>
      为选项绑定的值
    </p>
    <kiwi-radio v-model="radio" val="1">选项1</kiwi-radio>
    <kiwi-radio v-model="radio" val="2">选项2</kiwi-radio>
  </div>
</template>

<script>
import kiwiRadio from '../../../packages/Radio/src/Radio'
export default {
  components:{
    kiwiRadio
  },
  data(){
    return{
      radio: '2'
    }
  },
  methods:{
    handleChange(e){
      console.log(e)
    }
  }
  
}
</script>

<style scoped>

</style>