import Vue from 'vue'
import "bootstrap";
import '../src/sass/app.scss'
import App from './App.vue'
import router from './router'
import store from './store'
window.axios = require('axios');
// import {myMixin} from './mixins/textmixin.js'

Vue.config.productionTip = false
// Vue.mixin(myMixin);
new Vue({
  router,
  store,
  data(){
    return{
      newLoginStatus : {}
    }
  },
  render: h => h(App)
}).$mount('#app')
