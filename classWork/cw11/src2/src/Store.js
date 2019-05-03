import Vue from 'vue';

export default new Vue({
    data() {
        return {
            users: []
        }
    },
    methods: {
        fetchUsers() {
            fetch('https://randomuser.me/api/?results=50&seed=test')
                .then(resp => resp.json())
                .then(data => {
                    this.users = data.results
                })
        }
    }
});