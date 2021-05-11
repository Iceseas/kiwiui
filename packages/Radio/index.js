import kiwiRadio from './src/Radio'
kiwiRadio.install = function(Vue){
    Vue.component(kiwiRadio.name, kiwiRadio);
}
export default kiwiRadio;