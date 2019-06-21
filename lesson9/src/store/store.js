import Vuex from 'vuex'

function CreateStore(){
    return new Vuex.Store({
        state:{
            count:'购物车案例'
        }
    })
}
//导出创建的仓库
export default CreateStore