import kiwiButton from './src/Button'
kiwiButton.install = function(Vue){
    Vue.component(kiwiButton.name, kiwiButton);
}
export default kiwiButton;