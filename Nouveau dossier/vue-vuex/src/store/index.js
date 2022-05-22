import { createStore } from 'vuex'
import counterModule from './counter'
import categoryModule from './category'

// const counterModule = {
//   namespaced: true,
//   state: {  
//     counter: 10,
//     name: 'Mohamed IDBRAHIM'
//   },
//   mutations: {
//     increase(state, payload) {
//       state.counter += payload.data
//     }
//   },
//   getters: {
//     getName(state) {
//       return state.name.toUpperCase();
//     },
//     getCounter(state) {
      
//       return state.counter * 2;
//     },
//     getCounterNormalize(_, getters) {
//       const counter = getters.getCounter;

//       if(counter < 0) {
//         return 0
//       }

//       if(counter > 100) {
//         return 100
//       }

//       return counter
//     }
//   },
//   actions: {
//     increment({ commit }, payload) {
//       commit('increase', payload)
//     }
//   }
// }

// const categoryModule = {
//   state: {
//     categories: []
//   },
//   mutations: {
//     addCategory(category) {},
//     updateCategory(id, category) {},
//     deleteCategory(id) {},
//   },
//   getters: {
//     getCategories(state) {}
//   },
//   actions: {
//     persistCategory({ commit }, paylaod) {}
//   }
// }


export default createStore({
  
  modules: {
    counter: counterModule,
    category: categoryModule
  }
})
