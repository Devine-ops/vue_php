import { createStore } from 'vuex';

export interface AuthState {
  errorMessage: string | null;
}

const auth = {
  namespaced: true,  // Adicione esta linha para garantir que o módulo seja "namespaced"
  state: {
    errorMessage: null,
  },
  mutations: {
    setErrorMessage(state: AuthState, message: string | null) {
      state.errorMessage = message;
    },
  },
  actions: {
    async loginUser({ commit }, { email, password }: { email: string; password: string }) {
      try {
        if (email === 'admin@example.com' && password === 'password') {
          commit('setErrorMessage', null);  // Login bem-sucedido
        } else {
          commit('setErrorMessage', 'Credenciais inválidas');
        }
      } catch (error) {
        commit('setErrorMessage', 'Erro ao tentar fazer login');
      }
    },
  },
  getters: {
    errorMessage: (state: AuthState) => state.errorMessage,
  },
};

const store = createStore({
  modules: {
    auth,  // Certifique-se de que o módulo auth está registrado aqui
  },
});

export default store;
