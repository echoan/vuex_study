import Vuex from 'vuex'
console.log(process.env.NODE_ENV)
function CreateStore(){
    return new Vuex.Store({
        strict:process.env.NODE_ENV!='production',
        state:{
            count:0
        },
        mutations:{
            increment(state){
                state.count++
            }
        }
    })
}
//导出创建的仓库
export default CreateStore