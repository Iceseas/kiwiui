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
    <img src="https://img.shields.io/badge/npm-0.0.4-green">
  </a>
  <a href="https://github.com/Iceseas/kiwiui">
    <img src="https://img.shields.io/badge/coverage-10%25-blue">
  </a>
</p>

# 🥝KIWIUI 前端组件库

基于`vue2.x` 目前正在仿照element摸索开发中

> 注意：此框架只供学习使用，严禁在涉及商业的任何场所使用

## Example page
> kiwi/examples
  
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

## 更新日志
### 0.0.8
**bug修复：**
+ 修复了引入ui框架模块后报 `TypeError: Cannot read property 'toLowerCase' of undefined` 的错误
+ 修复自定义指令失效的问题

**优化：**
+ `kiwi-input` `kiwi-select` 调整样式
+ `kiwi-select` 增加没有选项的处理
+ `kiwi-select` 优化点击事件