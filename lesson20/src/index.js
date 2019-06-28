 //引入对应的包
 import Vue from 'vue'
 import Vuex from 'vuex'
 import createStore from './store'
 import Counter from './components/counter'
 Vue.use(Vuex)
 //创建一个仓库
 const store = createStore()
//创建一个vue的实例
 const app = new Vue({
    el:'#app',
   // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
   store,
   components:{Counter},
   template:`
     <div class = 'app'>
         <Counter></Counter>
     </div>
   `
});

if (module.hot) {
  module.hot.accept([
    './mutations'
  ], () => {
    store.hotUpdate({
      mutations: require('./mutations')
    })
  })
}