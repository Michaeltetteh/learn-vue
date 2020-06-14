import axios from 'axios';
import * as types from "./mutations-types"

const state = {
    cartItem: []
};

const mutations = {
    [types.UPDATE_CART_ITEMS] (state, payload) {
        state.cartItem = payload
    }
};

const actions = {
    getCartItems ({ commit }) {
        axios.get('/api/cart').then((res) => {
            commit('UPDATE_CART_ITEMS',res.data)
        });
    },

    addCartItem ({ commit }, cartItem) {
        axios.post('/api/cart', cartItem).then((res) => {
            commit("UPDATE_CART_ITEMS",res.data)
        });
    },

    removeCartItem ({ commit }, cartItem) {
        axios.post('/api/cart/delete',cartItem).then((res) => {
            commit("UPDATE_CART_ITEMS", res.data)
        });
    },

    removeAllCartItems ({ commit }) {
        axios.post('/api/cart/delete/all').then((res) => {
            commit("UPDATE_CART_ITEMS", res.data)
        });
    }
};

const getters = {
    cartItems: state => state.cartItem,
    
    cartTotal: state => {
        return state.cartItem.reduce((acc, cartItem) => {
            return ( cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    },

    cartQuantity: state => {
        return state.cartItem.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    }
};

const cartModule = {
    state,
    mutations,
    actions,
    getters
}

export default cartModule;
