<template>
    <div class="users-list">
        <user v-for="(user, key) in store.users" 
            :user="user" 
            :key="key"
            @tt="fff"></user>
    </div>

</template>
<script>
import User from './User';
import Store from '@/Store';

export default {
    data() {
        return {
            store: Store
        }
    },
    created() {
        if (!this.store.users.length) {
            Store.fetchUsers();
        }
        // this.fetchData();
    },
    //components: {User: User},
    methods: {
        fff: function(data) {
            console.log('User fullName:', data);
        },
        fetchData() {
            fetch('https://randomuser.me/api/?results=50&seed=test')
                .then(resp => resp.json())
                .then(data => {
                    this.users = data.results
                })
            
            fetch('https://randomuser.me/api/?results=50&seed=test')
                .then(function(resp) { return resp.json(); }.bind(this))
                .then(function(data) {
                    this.users = data.results;
                }.bind(this))

            /* var test = function() {
                console.log(this);
            };

            test = test.bind(5);

            test(); */

            /* var t = []
            t.push(new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve('test resolve');
                }, 5000);
            }))

            t.push(new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve('test resolve2');
                }, 10000);
            }))

            Promise.all(t).then(function(datas) {
                console.log(datas);
            }) */
        }
    }
}
</script>
<style>
    
    .users-list {
        width: 1300px;
        margin: 0 auto;
    }
    .users-list::after {
        clear: both;
    }
    
    .users-list::after,
    .users-list::before{
        content: " ";
        display: table;
    }
</style>