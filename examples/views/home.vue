<template>
  <div class="home_body">
    <div class="head">
      <div class="logo">
        <img class="img" :src="logo" />
        <span class="text">KIWIUI</span>
      </div>
    </div>
    <div :class="isMobile?'main_mobile':'main'">
      <div :class="isMobile?'main_left_mobile':'main_left'">
        <slideBar />
      </div>
      <div class="main_right">
        <router-view class="main_router_view" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/wiki.png'
import slideBar from '../components/slideBar/slideBar'
export default {
  components:{
    slideBar
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
  data(){
    return{
      logo
    }
  },
}
</script>

<style scoped>

</style>