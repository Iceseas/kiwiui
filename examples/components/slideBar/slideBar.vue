<template>
  <div class="slideBody">
    <router-link :class="['slideItem' , activePath=='updateLog'?' slideItemActive':'']" to="/index/updateLog" >
      更新日志
    </router-link>
    <router-link :class="['slideItem' , activePath=='home'?' slideItemActive':'']" to="/index/home" >
      安装
    </router-link>
    <router-link :class="['slideItem' , activePath=='Button'?' slideItemActive':'']" to="/index/Button" >
      Button 按钮
    </router-link>
    <router-link :class="['slideItem' , activePath=='Link'?' slideItemActive':'']" to="/index/Link" >
      Link 连接
    </router-link>
    <router-link :class="['slideItem', activePath=='Input'?' slideItemActive':'']" to="/index/Input" >
      Input 输入框
    </router-link>
    <router-link :class="['slideItem' , activePath=='Select'?' slideItemActive':'']" to="/index/Select" >
      Select 选择框
    </router-link>
    <router-link :class="['slideItem' , activePath=='Radio'?' slideItemActive':'']" to="/index/Radio" >
      Radio 单选框
    </router-link>
    <router-link :class="['slideItem' , activePath=='Checkbox'?' slideItemActive':'']" to="/index/Checkbox" >
      Checkbox 多选框
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activePath: ''
    }
  },
  watch:{
    "$route.name" : function(){
      this.activePath = this.$route.name;
    }
  },
  mounted(){
    this.activePath = this.$route.name;
  },
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
.slideItemActive{
  color: #9AD14B;
}
</style>