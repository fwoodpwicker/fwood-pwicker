<template>
    <div>
        <input 
        type='number' 
        min='1' max='6' 
        name='num_players'
        v-model="num_players"/>

        <button @click="submit"></button>
    </div>
</template>

<script>
// import { settings } from '../store/settings.js'
export default {
    data() {
        return{
            num_players: 2
        }
    },
    methods: {
        submit(){
            // console.log('submit form ')
            // settings.commit('setNumPlayers', num_players)
        }
    }
}
</script>

