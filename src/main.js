import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from "./filters/date.filter";
import messagePlugin from "./custom_utils/message.plugin";
import './registerServiceWorker';
import materialize from 'materialize-css'
import Vuelidate from "vuelidate";

import navbar from "./components/layouts/main/navbar";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.component("app-navbar", navbar)

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(VueAxios, axios);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


