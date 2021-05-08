<template>
  <div class="home_body">
    <div class="head">
      <div class="logo">
        <img class="img" :src="logo" />
        <span class="text">KIWIUI</span>
      </div>
    </div>
    <div class="main">
      <div class="main_left">
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
  data(){
    return{
      logo
    }
  },
}
</script>

<style scoped>

</style>