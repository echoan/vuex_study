import Vuex from 'vuex'
//引入vuex的内置logger插件
import createLogger from 'vuex/dist/logger'
// logger 插件会生成状态快照，所以仅在开发环境使用。
function CreateStore(){
    return new Vuex.Store({
        state:{
            count:0
        },
        plugins:[createLogger()],
        mutations:{
            increment(state){
                state.count++
            }
        }
    })
}
//导出创建的仓库
export default CreateStore