<template>
    <div class="user" >
        <h2 @click="openUser()">{{ fullName }}</h2>
        <img :src="picture" @click="$emit('tt', fullName)" alt="">
    </div>
</template>
<script>
import EventBus from '@/EventBus';

export default {
    props: ['user'],
    computed: {
        fullName() {
            return this.user.name.first + ' ' + this.user.name.last;
        },
        picture() {
            return this.user.picture.large;
        }
    },
    methods: {
        prName() {
            EventBus.$emit('userName', this.user.name.first);
        },
        openUser() {
            this.$router.push({name: 'PageUser', params: {id: this.user.id.value}})
        }
    }
}
</script>
<style>
    .user {
        width: 300px;
        float: left;
        box-shadow: 1px 1px 3px lightgray;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }

    .user > h2 {
        margin-top: 0;
        text-transform: capitalize;
        text-align: center;
    }

    .user > img {
        display: block;
        margin: 0 auto;
    }
</style>