import Vuex from 'vuex'
function createStore(){
   return new Vuex.Store({
            state:{
                count:15,
                message:'hello world && goodbye world'
            },
            mutations:{
                increment(state){
                    state.count++
                }
            }
        });
}
//导出该模块
export default createStore