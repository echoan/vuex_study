<template>
    <div id="app">
        <h1>购物车案例</h1>
            <hr>
        <h2>商品</h2>
        <ProductList/>
            <hr>
        <ShoppingCart/>
    </div>
</template>
<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
    components:{
        ProductList,
        ShoppingCart
    }
}
</script>
<style>
    
</style>