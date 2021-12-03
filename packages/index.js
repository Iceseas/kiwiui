import kiwiButton from './Button'
import kiwiInput from './Input'
import kiwiLink from './Link'
import kiwiSelect from './Select'
import kiwiRadio from './Radio'
import kiwiRadioGroup from './RadioGroup'
import kiwiCheckbox from './Checkbox'
import kiwiCheckboxGroup from './CheckboxGroup'
import kiwiSwitch from './Switch'
import kiwiInputNum from './InputNum'
import kiwiIcon from './Icon'
import kiwiTab from "./Tabs"
import kiwiTabPanel from "./TabPanel"


// 组件列表
const components = [
  kiwiButton,
  kiwiInput,
  kiwiLink,
  kiwiSelect,
  kiwiRadio,
  kiwiRadioGroup,
  kiwiCheckbox,
  kiwiCheckboxGroup,
  kiwiSwitch,
  kiwiInputNum,
  kiwiIcon,
  kiwiTab,
  kiwiTabPanel
]


// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
 
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  kiwiButton,
  kiwiInput,
  kiwiLink,
  kiwiSelect,
  kiwiRadio,
  kiwiRadioGroup,
  kiwiCheckbox,
  kiwiCheckboxGroup,
  kiwiSwitch,
  kiwiInputNum,
  kiwiIcon,
  kiwiTab,
  kiwiTabPanel
}