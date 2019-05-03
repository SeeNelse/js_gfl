import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },
    getters: {},
    mutations: {
        setUsers(state, users) {
            console.log(users);
            state.users = users;
        },
        setProducts(state, products) {
            // state.products = products;
            Vue.set(state, 'products', products);
        }
    },
    actions: {
        getUsers(context) {
            fetch('https://randomuser.me/api/?results=50&seed=test')
                .then(resp => resp.json())
                .then(data => {
                    //this.users = data.results
                    context.commit('setUsers', data.results);
                })
        }
    },
});