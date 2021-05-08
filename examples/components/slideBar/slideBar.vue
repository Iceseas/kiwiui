<template>
  <div class="slideBody">
    <router-link class="slideItem" to="/index/home" >
      安装
    </router-link>
    <router-link class="slideItem" to="/index/Button" >
      Button 按钮
    </router-link>
    <router-link class="slideItem" to="/index/Link" >
      Link 连接
    </router-link>
    <router-link class="slideItem" to="/index/Input" >
      Input 输入框
    </router-link>
    <router-link class="slideItem" to="/index/Select" >
      Select 选择框
    </router-link>
  </div>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style scoped>
.slideBody{
  width: 100%;
  box-sizing: border-box;
}
.slideItem{
  display: block;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.slideItem:hover{
  transition: 0.5s;
  color: #9AD14B;
}
</style>