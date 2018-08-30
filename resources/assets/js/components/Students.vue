<template>
    <div>
        
        <h4>Students</h4>
        
        <ul>
            <li v-for="(student, index) in students" :key="student.id">
                <span>{{ student.name }}</span>
                <i>{{ student.games.length }} </i>
                <button :disabled="student.selected == true" class="btn btn-info btn-sm" @click="addToTeam({team:'A', index})">Team A</button>
                <button :disabled="student.selected == true" class="btn btn-success btn-sm" @click="addToTeam({team: 'B', index})">Team B</button>
            </li>
        </ul>
        
    </div>
</template>




<script>
    import { mapState, mapActions } from 'vuex';
    
    export default {
        data(){
            return {}
        },
        computed: {
            ...mapState(['students'])
        },
        methods: {
            ...mapActions(['addToTeam'])
            /*addToTeam(team, index){
                this.$store.dispatch('addToTeam', {team, index});
            }*/
        },
        created(){
            this.$store.dispatch('setStudents');
        }
    }
</script>