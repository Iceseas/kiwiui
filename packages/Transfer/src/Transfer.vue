<template>
  <div class="kiwi-transfer--box">
    <div class="kiwi-transfer-leftbox">
      <div class="kiwi-transfer-top">

      </div>
      <kiwi-checkbox-group class="kiwi-transfer-checkboxgroup" v-model="checkboxGroupLeft">
        <div class="kiwi-transfer-item" v-for="item in list" :key="item.key" @click="handleLeftClickCheckbox(item)">
          <kiwi-checkbox :val="item.value">{{ item.label }}</kiwi-checkbox>
        </div>
      </kiwi-checkbox-group>
    </div>
    <div class="kiwi-transfer-midbox">
      <kiwi-button class="kiwi-transfer-btn" type="default" size="small">&#60;</kiwi-button>
      <kiwi-button class="kiwi-transfer-btn" type="default" @click="pushArr" size="small">&#62;</kiwi-button>
    </div>
    <div class="kiwi-transfer-rightbox">
      <div class="kiwi-transfer-top">

      </div>
      <kiwi-checkbox-group class="kiwi-transfer-checkboxgroup" v-model="checkboxGroupRight">
        <div class="kiwi-transfer-item" v-for="item in rightCheckedList" :key="item.key" @click="handleRightClickCheckbox(item)">
          <kiwi-checkbox :val="item.value">{{ item.label }}</kiwi-checkbox>
        </div>
      </kiwi-checkbox-group>
    </div>
  </div>
</template>

<script>
import kiwiCheckbox from "../../Checkbox/src/Checkbox";
import kiwiCheckboxGroup from "../../Checkbox/src/CheckBoxGroup";
import kiwiButton from "../../Button/src/Button";
export default {
  name: "kiwi-transfer",
  props: {
    list:{
      type: Array,
      default: ()=>{
        return [
          { label : '选项1', key: 1, value: 'one' },
          { label : '选项2', key: 2, value: 'two' },
          { label : '选项3', key: 3, value: 'three' },
          { label : '选项4', key: 4, value: 'four' },
          { label : '选项5', key: 5, value: 'five' },
          { label : '选项6', key: 6, value: 'six' },
          { label : '选项7', key: 7, value: 'seven' },
          { label : '选项8', key: 8, value: 'eight' },
          { label : '选项9', key: 9, value: 'nine' },
          { label : '选项10', key: 10, value: 'ten' },
          { label : '选项11', key: 11, value: 'eleven' },
          { label : '选项12', key: 12, value: 'twlve' },
        ]
      }
    },
  },
  component: {
    kiwiButton,
    kiwiCheckbox,
    kiwiCheckboxGroup,
  },
  data() {
    return {
      // 存储没有选择的list
      leftCheckedList: [],
      // 存储已经选择的list
      rightCheckedList: [],
      // 存储left checkboxGroup
      checkboxGroupLeft: [],
      // 存储right checkboxGroup
      checkboxGroupRight: [],
    };
  },
  methods:{
    handleLeftClickCheckbox(item) {
      this.$nextTick(()=>{
        if (this.checkboxGroupLeft.indexOf(item.value) === -1) {
          for(let i = 0; i < this.leftCheckedList.length; i++) {
            if (this.checkboxGroupLeft[i].value === item.value) {
              this.leftCheckedList.splice(i, 1);
            }
          }
        } else if (this.checkboxGroupLeft.indexOf(item.value) != -1) {
          this.leftCheckedList.push(item);
        }
      })
    },
    handleRightClickCheckbox(item) {
      
    },
    pushArr() {
      this.rightCheckedList = [...this.leftCheckedList];
      this.leftCheckedList = [];
    }
  }
};
</script>

<style scoped>
.kiwi-transfer--box {
  height: 320px;
  width: 540px;
  display: flex;
  overflow: hidden;
}
.kiwi-transfer-leftbox,
.kiwi-transfer-rightbox {
  width: 200px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
}
.kiwi-transfer-top{
  background: #F2F6FC;
  height: 15%;
  box-sizing: border-box;
  border-bottom: 1px solid #DCDFE6;
}
.kiwi-transfer-checkboxgroup{
  width: 100%;
  height: 85%;
  overflow-y: auto;
}
.kiwi-transfer-item{
  padding: 5px 0px;
  height: 32px;
  line-height: 32px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}
.kiwi-transfer-item > .kiwi-checkbox-block {
  flex: 1;
}
.kiwi-transfer-midbox {
  flex: 1;
  position: relative;
}
.kiwi-transfer-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.kiwi-transfer-btn:nth-of-type(1) {
  left: 0;
}
.kiwi-transfer-btn:nth-of-type(2) {
  right: 0;
}
</style>