import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 1
    },
    actions: {
        modifyCounter({commit}, cant) {
            console.log('action, modifyCounter', cant)
            commit('increment', cant)
        }
    },
    mutations: {
        increment(state, cant) {
            console.log('mutation, modifyCounter', state, cant)
            state.contador += cant
        }
    }
})