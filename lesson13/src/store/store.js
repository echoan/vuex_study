import Vuex from 'vuex'
import mutations from './mutations'
import state from './modules/shop'
import getters from './getters'

function CreateStore(){
    return new Vuex.Store({
        state,
        getters,
        mutations
    })
}
//导出创建的仓库
export default CreateStore