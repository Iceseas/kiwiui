<template>
  <div class="kiwi-transfer--box">
    <div class="kiwi-transfer-leftbox"></div>
    <div class="kiwi-transfer-midbox">
      <kiwi-button size="small">&#60;</kiwi-button>
      <kiwi-button size="small">&#62;</kiwi-button>
    </div>
    <div class="kiwi-transfer-rightbox"></div>
  </div>
</template>

<script>
import kiwiButton from '../../Button/src/Button';
export default {
  name:'kiwi-transfer',
  component:{
    kiwiButton
  }
}
</script>

<style scoped>
.kiwi-transfer--box{
  height: 320px;
  width: 600px;
  background: #eee;
  display: flex;
}
.kiwi-transfer-leftbox,
.kiwi-transfer-rightbox{
  width: 230px;
  background: cadetblue;
  border-radius: 4px;
}
.kiwi-transfer-midbox{
  flex: 1;
  position: relative;
}
</style>