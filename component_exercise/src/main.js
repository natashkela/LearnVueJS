import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerDetail from './ServerDetail.vue';
import ServerContainer from './ServerContainer.vue';

Vue.component('header-server',Header);
Vue.component('server-container',ServerContainer);
Vue.component('server-detail',ServerDetail);
Vue.component('footer-server',Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
