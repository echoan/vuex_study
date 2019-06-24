import {ADD_CART, REDUCE_CART} from './common.js'
const actions = {
    addCart({commit,state}){
        commit(ADD_CART,1)
    },
    reduceCart({commit,state}){
        commit(REDUCE_CART,1)
    }
};
export default actions