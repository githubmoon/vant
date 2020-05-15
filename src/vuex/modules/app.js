const app = {
 state:{
     info:"test vuex 用法"
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
}
export default app