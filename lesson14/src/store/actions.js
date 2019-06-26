import {ADD_CART, REDUCE_CART} from './common.js'
const actions = {
    addCart({commit,state},id){
        commit(ADD_CART,id)
    },
    reduceCart({commit,state},id){
        commit(REDUCE_CART,id)
    }
};
export default actions