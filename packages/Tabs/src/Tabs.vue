<template>
  <div ref="tab" class="kiwi-tabs--box">
    <ul class="kiwi-tabs--ul">
      <li 
        :class="[
          'kiwi-tabs--li',
          value === item.value ? 'activeClass' : ''
        ]" 
        v-for="(item,index) in labelArr" :key="index"
        @click="handleTabClick(item)">
        <kiwi-icon 
          v-if="item.iconName != undefined" 
          :name="item.iconName"
          :class="value === item.value ? 'iconActiveClass' : ''"></kiwi-icon>
        {{ item.label }}
        <kiwi-icon 
          v-if="closeAble" 
          name="kiwi-icon-plus" 
          @click="handleClose(index)"
          class="kiwi-tabs--li-close"
          :data-index="index"></kiwi-icon>
      </li>
      <!-- <div class="tab_bar"></div> -->
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import kiwiIcon from "../../Icon/src/Icon.vue"
export default {
  name: 'kiwi-tabs',
  components:{
    kiwiIcon
  },
  props:{
    value: {},
    closeAble: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      labelArr: [],
      activeChild: ''
    }
  },
  mounted() {
    // 获取用户填入的tab panel的属性
    this.labelArr = [];
    for (let index = 0; index < this.$children.length; index++) {
      this.labelArr.push({
        label: this.$children[index].label,
        value: this.$children[index].val,
        iconName: this.$children[index].iconName
      })
    } 
  },
  provide:['activeChild'],
  methods:{
    handleTabClick(item) {
      // 更新v-model
      this.$emit('input', item.value);
      this.$emit('tabClick', item)
      // 传递给子组件数据
      this.activeChild = item.value;
    },
    handleClose(index) {
      this.labelArr.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.kiwi-tabs--box{
  width: 100%;
}
.kiwi-tabs--ul{
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-bottom: 2px solid #ebebeb;
  position: relative;
  padding: 0;
}
.kiwi-tabs--li{
  position: relative;
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  color: #303952;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #ebebeb;
}
.kiwi-tabs--li-close{
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  font-size: 12px;
  z-index: 1000;
}
.tab_bar{
  position: absolute;
  height: 2px;
  box-sizing: border-box;
  bottom: 0;
  background-color: #1989fa;
}
.kiwi-tabs--li:hover{
  color: #1989fa;
  transition: 0.3s;
}
.activeClass{
  color: #1989fa !important;
  border-bottom: 2px solid #1989fa;
  transition: 0.3s;
}
.iconActiveClass{
  color: #1989fa !important;
  transition: 0.3s;
}
.kiwi-tabs--panel{
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
}
</style>