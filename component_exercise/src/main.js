import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ServerDetail from './components/ServerDetail.vue';
import ServerContainer from './components/ServerContainer.vue';

Vue.component('header-server',Header);
Vue.component('server-container',ServerContainer);
Vue.component('server-detail',ServerDetail);
Vue.component('footer-server',Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
