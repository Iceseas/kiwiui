<p align="center" 
  style="
  line-height: 80px;
  font-size: 40px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #9AD14B;">
  🥝KIWI
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/uikiwi">
    <img src="https://img.shields.io/badge/npm-0.2.1-green">
  </a>
  <a href="https://github.com/Iceseas/kiwiui">
    <img src="https://img.shields.io/badge/coverage-20%25-blue">
  </a>
  <a href="https://Iceseas.github.io">
    <img src="https://img.shields.io/badge/view-example-brightgreen">
  </a>
</p>

# 🥝KIWIUI 前端组件库

作者为了巩固自己的技术，准备开发一个组件库。

基于`vue2.x` 目前正在仿照element摸索开发中

> 注意：此组件库只供学习使用，严禁在涉及商业的任何场所使用

## Example page
[example page/api page](https://Iceseas.github.io)

## Target
  + 能够扩充丰富的组件和功能
  + 使用起来自由灵活
  + 自定义主题

## Install
**npm**

> npm install uikiwi -S

## Quick Start
在入口文件`mian.js`中使用
> import uikiwi from 'uikiwi'
> 
> import 'uikiwi/lib/uikiwi.css';
> 
> Vue.use(uikiwi)


## Elements
+ `kiwi-icon` icon 字体图标
+ `kiwi-button` Button 按钮组件
+ `kiwi-link` link 链接组件
+ `kiwi-input` input 输入框组件
+ `kiwi-select` select 下拉选择框组件
+ `kiwi-radio` radio 单选框组件
+ `kiwi-checkbox` checkbox 多选框组件
+ `kiwi-switch` switch 开关组件
+ `kiwi-input-num` inputNum 计数器组件
+ `kiwi-tabs` tab 标签页

## 更新日志
### 0.0.9
**bug修复：**
+ 修复了引入ui框架模块后报 `TypeError: Cannot read property 'toLowerCase' of undefined` 的错误
+ 修复自定义指令失效的问题

**优化：**
+ `kiwi-input` `kiwi-select` 调整样式
+ `kiwi-select` 增加没有选项的处理
+ `kiwi-select` 优化点击事件

### 0.1.0
**新增：**
+ `kiwi-radio` 单选框组件

**优化：**
+ `kiwi-input` `kiwi-select` 调整样式

### 0.1.1
**修复bug：**
+ example页面错误

### 0.1.2
**修复bug：**
+ `kiwi-select` 调整样式 修复选项少的情况下下拉框的高度
  

**优化：**
+ `kiwi-radio` 调整样式

### 0.1.3
**新增：**
+ `kiwi-radio-group` 单选框组
  

**优化：**
+ `kiwi-radio` 调整样式

### 0.1.4
**bug修复：**
+ 修复一个紧急bug

### 0.1.5
**调整了结构：**
+ 将0.1.3和0.1.4版本unpublish

### 0.1.6
**新增：**
+ `kiwi-checkbox` 多选框
+ `kiwi-checkbox-group` 多选框组
  

**优化：**
+ `kiwi-radio` 调整样式

### 0.1.7
**bug修复：**
+ 修复了`kiwi-input` `kiwi-select`对于使用`v-model`后只单向绑定的bug

### 0.1.8
**新增：**
+ `kiwi-switch` 开关组件
+ `kiwi-input-num` 计数器组件  目前只支持整数，后续会继续增加浮点数以及精度

**优化：**
+ `kiwi-input` 增加input事件处理
一些组件加入iconfont优化样式
+ `kiwi-checkbox` 调整样式
+ `kiwi-select` 调整样式

### 0.1.9
**bug修复：**
+ `kiwi-input` 无法输入的错误，现在已正常

**新增：**
+ `kiwi-input` 输入组件新增属性`showPassword` 配合密码框显示密码 `showClean` 可清空输入框

### 0.2.0
**bug修复：**
+ `kiwi-select` `kiwi-input-num` `kiwi-checkbox` icon无法显示的问题，已解决

**新增：**
+ `kiwi-icon` 图标，封装了一下一些常用的iconfont图标

### 0.2.1
**bug修复：**
+ `kiwi-link` a标签下划线样式依然存在的bug

**新增：**
+ `kiwi-tabs` 标签页，支持icon标签显示