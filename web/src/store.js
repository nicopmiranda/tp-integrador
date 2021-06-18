import Vue from 'vue';
import Vuex from 'vuex';
import { localMixinOrder } from './localMixins'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		productQuantity: 1,
		cartTotalQuantity: localMixinOrder.methods.calculateOrderTotalQuantity()
	},
	getters: {
		productQuantity: (state) => {
			return state.productQuantity;
		}
	},
	actions: {
        validProductQuantity({ commit }, quantity) {
            commit('validProductQuantity', quantity)
        },
		modifyCartTotalQuantity({ commit }, quantity, increment = true) {
			commit('modifyCartTotalQuantity', quantity, increment)
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
		}
	}
});

function validProductQuantity(quantity) {
	return !(quantity !== '' && (isNaN(quantity) || quantity <= 0 || quantity > 99))
}
