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
    <img src="https://img.shields.io/badge/npm-0.1.2-green">
  </a>
  <a href="https://github.com/Iceseas/kiwiui">
    <img src="https://img.shields.io/badge/coverage-10%25-blue">
  </a>
  <a href="Iceseas.github.io">
    <img src="https://img.shields.io/badge/view-example-brightgreen">
  </a>
</p>

# 🥝KIWIUI 前端组件库

作者为了巩固自己的技术，准备开发一个组件库。

基于`vue2.x` 目前正在仿照element摸索开发中

> 注意：此组件库只供学习使用，严禁在涉及商业的任何场所使用

## Example page
[example page/api page](Iceseas.github.io)
  
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
+ `kiwi-button` Button 按钮组件
+ `kiwi-link` link 链接组件
+ `kiwi-input` input 输入框组件
+ `kiwi-select` select 下拉选择框组件
+ `kiwi-radio` radio 单选框组件

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
