import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		productQuantity: 1
	},
	getters: {
		productQuantity: (state) => {
			return state.productQuantity;
		}
	},
	actions: {
        validProductQuantity({ commit }, quantity) {
            commit('validProductQuantity', quantity)
        }
	},
	mutations: {
        validProductQuantity(state, quantity = 1) {
            if (!validProductQuantity(quantity)) {
                state.productQuantity = 1
            } else {
                state.productQuantity = quantity
            }
        }
	}
});

function validProductQuantity(quantity) {
	return !(quantity !== '' && (isNaN(quantity) || quantity <= 0 || quantity > 99))
}
