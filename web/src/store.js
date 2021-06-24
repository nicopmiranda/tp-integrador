import Vue from 'vue';
import Vuex from 'vuex';
import { localMixinOrder } from './localMixins'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		productQuantity: 1,
		cartTotalQuantity: localMixinOrder.methods.calculateOrderTotalQuantity(),
		authToken: sessionStorage.getItem('authToken')
	},
	getters: {
		productQuantity: (state) => {
			return state.productQuantity;
		},
		authToken: (state) => {
			return state.authToken
		}
	},
	actions: {
        validProductQuantity({ commit }, quantity) {
            commit('validProductQuantity', quantity)
        },
		modifyCartTotalQuantity({ commit }, quantity, increment = true) {
			commit('modifyCartTotalQuantity', quantity, increment)
		},
		setAuthToken({ commit }, token) {
			commit('setAuthToken', token)
		}
	},
	mutations: {
        validProductQuantity(state, quantity = 1) {
            if (!validProductQuantity(quantity)) {
                state.productQuantity = 1
            } else {
                state.productQuantity = quantity
            }
        },
		modifyCartTotalQuantity(state, quantity, increment) { 
			if (increment) {
				state.cartTotalQuantity += quantity; 
			} else {
				state.cartTotalQuantity = quantity;
			}
		},
		setAuthToken(state, token) {
			if (token && !sessionStorage.getItem('authToken')) {
				sessionStorage.setItem('authToken', token)
				state.authToken = token
			} else {
				sessionStorage.removeItem('authToken')
				state.authToken = null
			}
		}
	}
});

function validProductQuantity(quantity) {
	return !(quantity !== '' && (isNaN(quantity) || quantity <= 0 || quantity > 99))
}
