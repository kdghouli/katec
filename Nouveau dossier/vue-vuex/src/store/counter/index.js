import counterMutations from './mutations';
import counterGetters from './getters';
import counterActions from './actions';
export default {
    namespaced: true,
    state: {
        counter: 10,
        name: 'Mohamed IDBRAHIM'
    },
    mutations: counterMutations,
    getters: counterGetters,
    actions: counterActions
}