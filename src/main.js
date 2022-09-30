import App from './App.vue'
import Vue from 'vue'
import store from './vuex/store'
import router from './router/router'
import './assets/styles/styles.sass'

new Vue({
    render: h => h(App),
    store,
    router,
  }).$mount('#app')
