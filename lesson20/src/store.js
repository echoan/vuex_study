import Vuex from 'vuex'
import mutations from './mutations'
function createStore(){
   return new Vuex.Store({
            state:{
                count:15,
                message:'hello world && goodbye world'
            },
            mutations
        });
}
//导出该模块
export default createStore