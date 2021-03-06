import Vue from 'vue';
import Vuex from 'vuex';
import { calculateOrderTotalQuantity } from './localMixins'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		productQuantity: 1,
		cartTotalQuantity: calculateOrderTotalQuantity(),
		authToken: localStorage.getItem('authToken'),
		username: '',
		attemptedLogin: false
	},
	getters: {
		productQuantity: (state) => {
			return state.productQuantity;
		},
		authToken: (state) => {
			return state.authToken;
		},
		loginAttempt: (state) => {
			return state.attemptedLogin;
		},
		username: (state) => {
			return state.username;
		}
	},
	actions: {
        validProductQuantity({ commit }, quantity) {
            commit('validProductQuantity', quantity)
        },
		modifyCartTotalQuantity({ commit }, {quantity, increment = true}) {
			console.log('q y i:', quantity, increment)
			commit('modifyCartTotalQuantity', quantity, increment)
		},
		setAuthToken({ commit }, token) {
			commit('setAuthToken', token)
		},
		setUsername({ commit }, username) {
			commit('setUsername', username)
		},
		setLoginAttempt({ commit }, tried){
			commit('setLoginAttempt', tried)
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
			if (token && !localStorage.getItem('authToken')) {
				localStorage.setItem('authToken', token)
				state.authToken = token
			} else {
				localStorage.removeItem('authToken')
				state.authToken = null
			}
		},
		setLoginAttempt(state, tried){
			state.attemptedLogin = tried;
		},
		setUsername(state, username){
			state.username = username;
		}
	}
});

function validProductQuantity(quantity) {
	return !(quantity !== '' && (isNaN(quantity) || quantity <= 0 || quantity > 99))
}