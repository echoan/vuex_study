import Vuex from 'vuex'
import cart from './module/cart'
import products from './module/products'

function CreateStore(){
    return new Vuex.Store({
        modules:{
            cart,
            products
        }
    })
}
//导出创建的仓库
export default CreateStore