<template>
  <div class="kiwi-transfer--box">
    <div class="kiwi-transfer-leftbox">
      <div class="kiwi-transfer-top">
        {{ checkboxGroupLeft.length }} / {{ leftCheckedList.length }}
      </div>
      <kiwi-checkbox-group class="kiwi-transfer-checkboxgroup" v-model="checkboxGroupLeft">
        <div class="kiwi-transfer-item" v-for="item in leftCheckedList" :key="item.key">
          <kiwi-checkbox :val="item.value" :disabled="item.disabled">{{ item.label }}</kiwi-checkbox>
        </div>
      </kiwi-checkbox-group>
    </div>
    <div class="kiwi-transfer-midbox">
      <kiwi-button class="kiwi-transfer-btn" type="default" @click="backArr" size="small">&#60;</kiwi-button>
      <kiwi-button class="kiwi-transfer-btn" type="default" @click="pushArr" size="small">&#62;</kiwi-button>
    </div>
    <div class="kiwi-transfer-rightbox">
      <div class="kiwi-transfer-top">
        {{ checkboxGroupRight.length }} / {{ rightCheckedList.length }}
      </div>
      <kiwi-checkbox-group class="kiwi-transfer-checkboxgroup" v-model="checkboxGroupRight">
        <div class="kiwi-transfer-item" v-for="item in rightCheckedList" :key="item.key">
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
    value: {},
    list: Array
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
      // 最后传出去绑定的值
      resArr: []
    };
  },
  watch:{
    resArr: function(newval){
      this.$emit('input', newval)
    },
    value: function(newval){
      // 检测外部数据变化时内部跟着变化
      for (let i = 0; i < newval.length; i++) {
        console.log(this.leftCheckedList.includes(newval[i]))
        if (this.leftCheckedList.includes(newval[i]) && !this.rightCheckedList.includes(newval[i])) {
          this.rightCheckedList.push(newval[i]);
          this.leftCheckedList.splice(this.leftCheckedList.indexOf(newval[i]), 1);
        }
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      if (this.list)
      this.leftCheckedList = [...this.list]
    })
  },
  methods:{
    pushArr() {
      for(let i = 0; i < this.leftCheckedList.length; i++) {
        for(let j = 0; j < this.checkboxGroupLeft.length; j++) {
          if (this.checkboxGroupLeft.includes(this.leftCheckedList[i].value)){
            this.rightCheckedList.push(this.leftCheckedList[i]);
            this.leftCheckedList.splice(i, 1);
          }
        }
      }
      
      this.resArr = [...this.rightCheckedList];
      
      this.$nextTick(()=>{
        this.checkboxGroupRight = [];
        this.checkboxGroupLeft = [];
      })
    },
    backArr(){
      for(let i = 0; i < this.rightCheckedList.length; i++) {
        for(let j = 0; j < this.checkboxGroupRight.length; j++) {
          if (this.checkboxGroupRight.includes(this.rightCheckedList[i].value)){
            this.leftCheckedList.push(this.rightCheckedList[i]);
            this.rightCheckedList.splice(i, 1);
          }
        }
      }
      this.resArr = [...this.rightCheckedList];
      this.$nextTick(()=>{
        this.checkboxGroupRight = [];
        this.checkboxGroupLeft = [];
      })
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
  background: #f7f7f7;
  display: flex;
  align-items:center;
  padding: 0 5px;
  height: 10%;
  box-sizing: border-box;
  border-bottom: 1px solid #DCDFE6;
}
.kiwi-transfer-checkboxgroup{
  width: 100%;
  height: 90%;
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