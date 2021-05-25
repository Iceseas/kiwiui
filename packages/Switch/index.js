import kiwiSwitch from './src/Switch'
kiwiSwitch.install = function(Vue){
    Vue.component(kiwiSwitch.name, kiwiSwitch);
}
export default kiwiSwitch;