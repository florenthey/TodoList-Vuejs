import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Entry point
// Nouvelle instance de Vue dispo liée à la div app d'index.html
new Vue({
  render: h => h(App),
}).$mount('#app')
