import kiwiTransfer from './src/Transfer'
kiwiTransfer.install = function(Vue){
    Vue.component(kiwiTransfer.name, kiwiTransfer);
}
export default kiwiTransfer;