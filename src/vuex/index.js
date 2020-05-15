import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        info:"test vuex 用法"
    },
  getters: {
    doneInfo: state => {
      return state.info+"gerttt"
    }
  },
    mutations:{
        UPDATE_INFO:(state,info) =>{
          state.info = info
        }
    },
    actions:{
        updateInfo({commit},info){
           commit('UPDATE_INFO',info)
        }
    }
})
export default store