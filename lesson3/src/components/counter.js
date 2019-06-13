import Vuex from 'vuex'
//创建一个组件
const Counter = {
    template:`<div>{{count}} {{message}} {{sum}} {{sayHi}}</div>`,
    data(){
        return{
            num:100
        }
    },
    //终极写法
    computed:{
        sayHi(){ return 'hi'},
        ...Vuex.mapState({
            count:(state)=>state.count,
            message:function(state){
                return state.message
            },
            sum:function(state){
                return this.num+state.count
            }
        }) //解构的写法 使其内部的内容暴露到和sayHi在同一层级
    }
}
//导出该模块
export default Counter