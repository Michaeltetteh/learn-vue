import Vue from 'vue'
import Vuex from 'vuex'
import cart from './module/cart'
import product from './module/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    cart,
    product
  }
})
