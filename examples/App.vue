<template>
  <div id="app">
    <router-view class="routerView" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      baseCss: ''
    }
  },
  components:{

  }
}
</script>
<style src="./styles/pc.css"></style>
<style>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  color: #303952;
}
html,
body,
#app{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
  height: 100%;
}
</style>
