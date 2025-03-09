export default {
    state: {
      errorMessage: null,
    },
    mutations: {
      setErrorMessage(state, message) {
        state.errorMessage = message;
      },
    },
    actions: {
      async loginUser({ commit }, { email, password }) {
        try {
          // Lógica para login
          // Se o login falhar, dispare a mutação para definir o erro
          commit('setErrorMessage', 'Erro no login');
        } catch (error) {
          commit('setErrorMessage', 'Erro no login');
        }
      },
    },
    getters: {
      errorMessage: (state) => state.errorMessage,
    },
  };