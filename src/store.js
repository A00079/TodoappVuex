import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        DummyData: [
            {
                hero: 'Superman',
                id:1
            },
            {
                hero: 'Batman',
                id:2
            }
        ],
        Delete_hero:''
    },
    mutations: {
        ADD_HERO(state,payload){
            state.DummyData.push(payload)
        },
        DELETE_HERO(state,payload){
            state.DummyData.splice(payload,1)
        },
        NOTI_DELETE_HERO(state,payload){
            state.Delete_hero = payload
        }
    },
    actions: {
        add_hero({commit},payload) {
            commit('ADD_HERO',payload)
        },
        delete_hero({commit},payload){
            commit('DELETE_HERO',payload)
        },
        noti_delete_hero({commit},payload){
            commit('NOTI_DELETE_HERO',payload)
        }
    },
    getters: {
        getHeros(state){
            return state.DummyData
        },
        deleted_hero(state){
            return state.Delete_hero
        }
    }
});