<template>
    <div>
        
        <h4>Team {{team}}</h4>
        
        <ul>
            <li v-for="(member, index) in teams" :key="member.id">
                <span>{{ member.name }}</span>
                <button class="btn btn-sm btn-danger" @click="removeFromTeam({team, member, index})">X</button>
            </li>
        </ul>
        
    </div>
</template>


<script>
    ///import store from '../vuex';
    import { mapActions } from 'vuex';
    
    
    export default {
        props: ['team'],
        computed: {
            teams(){
                return this.team === 'A' ? this.$store.state.teamA : this.$store.state.teamB;
            }
        },
        methods: {
            ...mapActions(['removeFromTeam'])
            /*removeFromTeam(team, member, index){
                this.$store.dispatch('removeFromTeam', {team, member, index});
            }*/
        }
    }
</script>


<style>
</style>