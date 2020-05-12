require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import Route from '@/js/routes.js'
import App from '@/js/views/App' 


const app = new Vue({
    el: '#app',
    router: Route,
    render: h => h(App)
});

export default app;
