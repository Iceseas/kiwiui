<template>
  <i @click="handleClick" :class="'iconfont-init iconfont ' + iconName"></i>
</template>

<script>
export default {
  name: 'kiwi-icon',
  data(){
    return {
      iconList: [
        {name: 'kiwi-icon-plus',iconClass: 'icon-jia'},
        {name: 'kiwi-icon-decrease',iconClass: 'icon-jian'},
        {name: 'kiwi-icon-correct',iconClass: 'icon-gouxuan'},
        {name: 'kiwi-icon-left',iconClass: 'icon-fanhui'},
        {name: 'kiwi-icon-right',iconClass: 'icon-zhankai'},
        {name: 'kiwi-icon-up',iconClass: 'icon-shouqi'},
        {name: 'kiwi-icon-down',iconClass: 'icon-arrow-down'},
        {name: 'kiwi-icon-clock',iconClass: 'icon-shijian'},
        {name: 'kiwi-icon-menu',iconClass: 'icon-quanbu'},
        {name: 'kiwi-icon-company',iconClass: 'icon-gongsi'},
        {name: 'kiwi-icon-user',iconClass: 'icon-gerenzhongxin'},
        {name: 'kiwi-icon-password',iconClass: 'icon-lock'},
        {name: 'kiwi-icon-options',iconClass: 'icon-shezhi'},
        {name: 'kiwi-icon-download',iconClass: 'icon-download'},
        {name: 'kiwi-icon-view',iconClass: 'icon-view'},
        {name: 'kiwi-icon-copy',iconClass: 'icon-copy'},
        {name: 'kiwi-icon-warning',iconClass: 'icon-zhuyi'},
        {name: 'kiwi-icon-loading',iconClass: 'icon-zhongxinjiazai'},
        {name: 'kiwi-icon-position',iconClass: 'icon-dingwei2'},
        {name: 'kiwi-icon-video',iconClass: 'icon-luxiang'},
        {name: 'kiwi-icon-message',iconClass: 'icon-xinxi2'},
        {name: 'kiwi-icon-home',iconClass: 'icon-shouye'},
        {name: 'kiwi-icon-sign-in',iconClass: 'icon-qiandaochenggong'},
        {name: 'kiwi-icon-share',iconClass: 'icon-fasong'},
        {name: 'kiwi-icon-coupon',iconClass: 'icon-youhuiquan'},
        {name: 'kiwi-icon-collect',iconClass: 'icon-shoucang'},
        {name: 'kiwi-icon-bookmark',iconClass: 'icon-shuqian'},
        {name: 'kiwi-icon-loupe',iconClass: 'icon-sousuo2'},
        {name: 'kiwi-icon-camera',iconClass: 'icon-xiangji'},
        {name: 'kiwi-icon-find',iconClass: 'icon-faxian'},
        {name: 'kiwi-icon-scan',iconClass: 'icon-saoyisao'},
        {name: 'kiwi-icon-edit',iconClass: 'icon-bianji1'},
        {name: 'kiwi-icon-pc',iconClass: 'icon-pc'},
        {name: 'kiwi-icon-phone',iconClass: 'icon-cell-phone'},
        {name: 'kiwi-icon-safe',iconClass: 'icon-anquanzhongxin'},
        {name: 'kiwi-icon-shopcar',iconClass: 'icon-gouwuche'},
        {name: 'kiwi-icon-video2',iconClass: 'icon-luxiang1'},
        {name: 'kiwi-icon-vip',iconClass: 'icon-huiyuan'},
        {name: 'kiwi-icon-message2',iconClass: 'icon-xiaoxi'},
        {name: 'kiwi-icon-position2',iconClass: 'icon-dingwei3'},
        {name: 'kiwi-icon-home2',iconClass: 'icon-shouye1'},
        {name: 'kiwi-icon-options2',iconClass: 'icon-shezhi2'},
        {name: 'kiwi-icon-coupon2',iconClass: 'icon-youhuiquan1'},
        {name: 'kiwi-icon-share2',iconClass: 'icon-fasong1'},
        {name: 'kiwi-icon-edit2',iconClass: 'icon-bianji2'},
        {name: 'kiwi-icon-collect2',iconClass: 'icon-shoucang21'},
        {name: 'kiwi-icon-camera2',iconClass: 'icon-xiangji1'},
        {name: 'kiwi-icon-collect3',iconClass: 'icon-shoucang1'},
        {name: 'kiwi-icon-message3',iconClass: 'icon-xinxi1'},
        {name: 'kiwi-icon-menu2',iconClass: 'icon-gengduo2'},
        {name: 'kiwi-icon-scan2',iconClass: 'icon-fangdajing'},
        {name: 'kiwi-icon-signin2',iconClass: 'icon-qiandaochenggong1'},
      ],
      iconName: ''
    }
  },
  props:{
    name: String
  },
  mounted(){
    for(let i = 0; i < this.iconList.length; i++) {
        if (this.iconList[i].name == this.name) 
        this.iconName = this.iconList[i].iconClass
      }
  },
  methods:{
    handleClick(val) {
      this.$emit('click', val);
    }
  }
}
</script>

<style scoped>

@import '../../../examples/assets/iconfont/iconfont.css';

.iconfont-init{
  font-size: 14px;
}
</style>