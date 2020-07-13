import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';

import './assets/main.css';

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
