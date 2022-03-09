

require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('index', require('./components/index.vue').default);
const app = new Vue({
    el: '#app',
});
