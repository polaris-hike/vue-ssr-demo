import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default ()=>{
    let store = new Vuex.Store({
      state:{
        name:'wxw'
      },
      mutations:{
        changeName(state,name){
          state.name = name
        }
      },
      actions:{
        changeName({commit}) {
          return new Promise((resolve,reject) =>{
            setTimeout(()=>{
              commit('changeName','hjj')
              resolve()
            },2000)
          })
        }
      }
    })
  if(typeof  window !== 'undefined' && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }
  return store;
}