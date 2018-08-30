import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import data from '../data/students'; 

export default new Vuex.Store({
    state: {
        students: [],
        teamA: [],
        teamB: []
    },
    getters: {},
    actions: {
        setStudents(context){
            context.commit('setStudents');
        },
        addToTeam(context, data){
            context.commit('addToTeam', data);
            context.commit('selectStudent', data.index);
        },
        removeFromTeam(context, data){
            context.commit('removeFromTeam', data);
            context.commit('unSelectStudent', data);
        }
    },
    mutations: {
        setStudents(state){
            state.students =data.getStudents();
        },
        addToTeam(state, data){
            if(data.team === 'A'){
               state.teamA.push(state.students[data.index]);
            }else{
                state.teamB.push(state.students[data.index]);
            }
        },
        selectStudent(state, index){
            state.students[index].selected =true;
        },
        unSelectStudent(state, data){
            state.students.forEach(student => {
                student.id === data.member.id ? student.selected =  false : '';
            });
        },
        removeFromTeam(state, data){
            if(data.team === 'A'){
               state.teamA.splice(data.index, 1);
            }else{
               state.teamB.splice(data.index, 1); 
            }
        }
    }
});