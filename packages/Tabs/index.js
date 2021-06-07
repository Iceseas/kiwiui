import kiwiTabs from './src/Tabs'
kiwiTabs.install = function(Vue){
    Vue.component(kiwiTabs.name, kiwiTabs);
}
export default kiwiTabs;