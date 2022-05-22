export default {
    getName(state) {
      return state.name.toUpperCase();
    },
    getCounter(state) {
      
      return state.counter * 2;
    },
    getCounterNormalize(_, getters) {
      const counter = getters.getCounter;

      if(counter < 0) {
        return 0
      }

      if(counter > 100) {
        return 100
      }

      return counter
    }
  }