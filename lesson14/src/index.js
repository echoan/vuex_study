import Vue from 'vue'
import Vuex from 'vuex'
//引入vuex创建的仓库
import CreateStore from './store/store.js'
//引入组件app.vue
import  App from './component/App.vue'

Vue.use(Vuex);
//使用引入的仓库CreateStore
const store = CreateStore();
//创建vue实例
const app = new Vue({
    el:'#app',
    store,
    render:h=>h(App)
  
})