import kiwiLink from './src/Link'
kiwiLink.install = function(Vue){
    Vue.component(kiwiLink.name, kiwiLink);
}
export default kiwiLink;