<template>
  <div class="main_page_init">
    <p class="title_init title_2">Tabs 标签页</p>
    <p class="title_init title_4">切换显示不同的内容</p>
    <p class="title_init title_3">基础使用</p>
    <p class="title_init">使用
      <span class="highlight_code">v-model</span>
      绑定string类型的变量
    </p>
    <div class="component_show_block">
      <kiwi-tabs v-model="activeTab">
        <kiwi-tab-panel label="标签1" val="1">1</kiwi-tab-panel>
        <kiwi-tab-panel label="标签2" val="2">2</kiwi-tab-panel>
        <kiwi-tab-panel label="标签3" val="3">3</kiwi-tab-panel>
        <kiwi-tab-panel label="标签4" val="4">4</kiwi-tab-panel>
        <kiwi-tab-panel label="标签5" val="5">5</kiwi-tab-panel>
      </kiwi-tabs>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认tab组件:
        &#60;kiwi-tabs v-model="activeTab"&#62;
          &#60;kiwi-tab-panel label="标签1" val="1"&#62;1&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签2" val="2"&#62;2&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签3" val="3"&#62;3&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签4" val="4"&#62;4&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签5" val="5"&#62;5&#60;/kiwi-tab-panel&#62;
        &#60;/kiwi-tabs&#62;
        export default {
        data(){
          return {
            activeTab: '2'
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">加入icon</p>
    <p class="title_init">使用
      <span class="highlight_code">iconName</span>
      向
      <span class="highlight_code">kiwi-tab-panel</span>
      传递想要显示的icon
    </p>
    <div class="component_show_block">
      <kiwi-tabs v-model="activeTab2">
        <kiwi-tab-panel label="标签1" val="1" iconName="kiwi-icon-company">1</kiwi-tab-panel>
        <kiwi-tab-panel label="标签2" val="2" iconName="kiwi-icon-camera">2</kiwi-tab-panel>
        <kiwi-tab-panel label="" val="3" iconName="kiwi-icon-coupon">3</kiwi-tab-panel>
        <kiwi-tab-panel label="" val="4" iconName="kiwi-icon-phone">4</kiwi-tab-panel>
        <kiwi-tab-panel label="标签5" val="5" iconName="kiwi-icon-scan">5</kiwi-tab-panel>
      </kiwi-tabs>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认tab组件:
        &#60;kiwi-tabs v-model="activeTab"&#62;
          &#60;kiwi-tab-panel label="标签1" val="1" iconName="kiwi-icon-company"&#62;1&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签2" val="2" iconName="kiwi-icon-camera"&#62;2&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="" val="3" iconName="kiwi-icon-coupon"&#62;3&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="" val="4" iconName="kiwi-icon-phone"&#62;4&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签5" val="5" iconName="kiwi-icon-scan"&#62;5&#60;/kiwi-tab-panel&#62;
        &#60;/kiwi-tabs&#62;
        export default {
        data(){
          return {
            activeTab: '2'
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">可关闭</p>
    <p class="title_init">使用
      <span class="highlight_code">closeAble</span>
      定义tab可关闭
    </p>
    <div class="component_show_block">
      <kiwi-tabs v-model="activeTab3" closeAble>
        <kiwi-tab-panel label="标签1" val="1" iconName="kiwi-icon-company">1</kiwi-tab-panel>
        <kiwi-tab-panel label="标签2" val="2" iconName="kiwi-icon-camera">2</kiwi-tab-panel>
        <kiwi-tab-panel label="" val="3" iconName="kiwi-icon-coupon">3</kiwi-tab-panel>
        <kiwi-tab-panel label="" val="4" iconName="kiwi-icon-phone">4</kiwi-tab-panel>
        <kiwi-tab-panel label="标签5" val="5" iconName="kiwi-icon-scan">5</kiwi-tab-panel>
      </kiwi-tabs>
    </div>
    <p class="title_init">查看代码</p>
    <div class="component_show_block">
      <pre>
        默认tab组件:
        &#60;kiwi-tabs v-model="activeTab" closeAble&#62;
          &#60;kiwi-tab-panel label="标签1" val="1" iconName="kiwi-icon-company"&#62;1&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签2" val="2" iconName="kiwi-icon-camera"&#62;2&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="" val="3" iconName="kiwi-icon-coupon"&#62;3&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="" val="4" iconName="kiwi-icon-phone"&#62;4&#60;/kiwi-tab-panel&#62;
          &#60;kiwi-tab-panel label="标签5" val="5" iconName="kiwi-icon-scan"&#62;5&#60;/kiwi-tab-panel&#62;
        &#60;/kiwi-tabs&#62;
        export default {
        data(){
          return {
            activeTab: '2'
          }
        }
      }
      </pre>
    </div>
    <p class="title_init title_3">Attributes</p>
    <table class="attributes_table">
      <thead>
        <tr>
          <td v-for="item in attributes_type" :key="item">{{ item }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="content in attributes_content" :key="content.name">
          <td>{{ content.name }}</td>
          <td>{{ content.explain }}</td>
          <td>{{ content.type }}</td>
          <td>{{ content.items }}</td>
          <td>{{ content.default }}</td>
        </tr>
      </tbody>
    </table>
    <p class="title_init title_3">tab-panel Attributes</p>
    <table class="attributes_table">
      <thead>
        <tr>
          <td v-for="item in attributes_type" :key="item">{{ item }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="content in attributes_item_content" :key="content.name">
          <td>{{ content.name }}</td>
          <td>{{ content.explain }}</td>
          <td>{{ content.type }}</td>
          <td>{{ content.items }}</td>
          <td>{{ content.default }}</td>
        </tr>
      </tbody>
    </table>
    <p class="title_init title_3">Radio Events</p>
    <table class="attributes_table">
      <thead>
        <tr>
          <td>事件名称</td>
          <td>说明</td>
          <td>回调参数</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tabClick</td>
          <td>	在组件 Tabs 点击标签时触发</td>
          <td>被选中的标签 tab 实例</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components:{
    
  },
  data() {
    return {
      activeTab: '2',
      activeTab2: '2',
      activeTab3: '2',
      attributes_type:['参数','说明','类型','可选值','默认值'],
      attributes_content:[
        {
          name: 'v-model',
          explain: '绑定值',
          type: 'string',
          items: '-',
          default: '-'
        },
      ],
      attributes_item_content:[
        {
          name: 'label',
          explain: '标签显示值',
          type: 'string',
          items: '-',
          default: '-'
        },
        {
          name: 'val',
          explain: '标签绑定值',
          type: 'string',
          items: '-',
          default: '-'
        },
        {
          name: 'iconName',
          explain: 'icon',
          type: 'string',
          items: '-',
          default: '-'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>