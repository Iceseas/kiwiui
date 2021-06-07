<template>
  <div class="slideBody">
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,
        activePath=='updateLog'?' slideItemActive':''
       ]" 
       to="/index/updateLog" >
      更新日志
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,, 
        activePath=='home'?' slideItemActive':''
      ]" 
      to="/index/home" >
      安装
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,, 
        activePath=='Icon'?' slideItemActive':''
      ]" 
      to="/index/Icon" >
      Icon 图标
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,, 
        activePath=='Button'?' slideItemActive':''
      ]" 
      to="/index/Button" >
      Button 按钮
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,,
        activePath=='Link'?' slideItemActive':''
      ]" 
      to="/index/Link" >
      Link 连接
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,, 
        activePath=='Input'?' slideItemActive':''
      ]" 
      to="/index/Input" >
      Input 输入框
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,,
        activePath=='Select'?' slideItemActive':''
      ]" 
      to="/index/Select" >
      Select 选择框
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,,
        activePath=='Radio'?' slideItemActive':''
      ]" 
      to="/index/Radio" >
      Radio 单选框
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,, 
        activePath=='Checkbox'?' slideItemActive':''
      ]" 
      to="/index/Checkbox" >
      Checkbox 多选框
    </router-link>
    <!-- <router-link :class="['slideItem' , activePath=='Transfer'?' slideItemActive':'']" to="/index/Transfer" >
      <span>Transfer 穿梭框</span>
    </router-link> -->
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,, 
        activePath=='InputNum'?' slideItemActive':''
      ]" 
      to="/index/InputNum" >
      InputNum 计数器
    </router-link>
    <router-link 
      :class="[
        isMobile?'slideItem_mobile':'slideItem' ,, 
        activePath=='Switch'?' slideItemActive':''
      ]" 
      to="/index/Switch" >
      Switch 开关
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
  computed:{
    isMobile(){
      if (this.$store.state.screenWidth < 1024) {
        return true;
      } else {
        return false;
      }
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
  padding: 2rem 2rem;
  height: 8rem;
  line-height: 8rem;
  font-size: 1.2rem !important;
  font-weight: 600;
  cursor: pointer;
}
.slideItem_mobile{
  display: block;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 2rem 2rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1rem !important;
  font-weight: 600;
  cursor: pointer;
}
.slideItemText{
  display: inline-block;
  width: 18rem;
  border-bottom: 1px solid #eee;
}
.slideItem:hover{
  transition: 0.5s;
  color: #9AD14B;
}
.slideItemActive{
  color: #9AD14B;
}
</style>