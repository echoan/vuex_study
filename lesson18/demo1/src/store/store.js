import Vuex from 'vuex'
//引入muations
import mutations from './mutations'
function CreateStore(){
    return new Vuex.Store({
        state:{
            count:0
        },
        mutations
    })
}
//导出创建的仓库
export default CreateStore