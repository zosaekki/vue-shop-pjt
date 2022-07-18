import { createStore } from 'vuex'; // function 하나만 가져오겠다!!
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state() {
    return {
      user: {}
    }
  },
  mutations: {
    user: (state, data) => {
      state.user = data;
    }
  },
  plugins: [
    createPersistedState({
      paths: ['user']
    })
  ],
})