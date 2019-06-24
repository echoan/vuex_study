import Vuex from 'vuex'
const ADD_CART = 'ADD_CART'
const REDUCE_CART = 'REDUCE_CART'
const state = {
    goods:[
        {
            id: '0',
            name: '华为 HUAWEI Mate20X ',
            hint: '麒麟980芯片全面屏超微距影像超大广角徕卡三摄6GB+128GB宝石蓝全网通版双4G游戏手机',
            price: 4489.00,
            num: 0,
            img: require('../assets/one.jpg')
          },
          {
            id: '1',
            name: '华为 HUAWEI P30 Pro',
            hint: '超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹 8GB+128GB天空之境全网通版双4G手机',
            price: 5478.00,
            num: 0,
            img: require('../assets/two.jpg')
          },
          {
            id: '2',
            name: '华为 HUAWEI nova 5 Pro',
            hint: '前置3200万人像超级夜景4800万AI四摄麒麟980芯片8GB+128GB绮境森林全网通双4G手机',
            price: 2999.00,
            num: 0,
            img: require('../assets/three.jpg')
          }
        ],
        totalPrice: 0.00,
        totalNum: 0
};
const mutations = {
    [ADD_CART](state,id){
        state.goods[id].num++
        state.totalNum++
        state.totalPrice += state.goods[id].price
    },
    [REDUCE_CART](state,id){
        if (state.goods[id].num > 0) {
            state.goods[id].num--
            state.totalNum--
            state.totalPrice -= state.goods[id].price
        }
    }
};
const actions = {
    addCart({commit,state}){
        commit(ADD_CART,1)
    },
    reduceCart({commit,state}){
        commit(REDUCE_CART,1)
    }
};
function CreateStore(){
    return new Vuex.Store({
        state,
        mutations,
        actions
    })
}
//导出创建的仓库
export default CreateStore