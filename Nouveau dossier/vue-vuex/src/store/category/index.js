import categoryMutations from './mutations';
import categoryGetters from './getters';
import categoryActions from './actions';
export default {
    state: {
        categories: []
    },
    mutations: categoryMutations,
    getters: categoryGetters,
    actions: categoryActions
}