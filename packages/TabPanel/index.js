import kiwiTabPanel from '../Tabs/src/Tabs-panel.vue'
kiwiTabPanel.install = function(Vue){
    Vue.component(kiwiTabPanel.name, kiwiTabPanel);
}
export default kiwiTabPanel;