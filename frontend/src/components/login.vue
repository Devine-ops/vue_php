<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: {
      ...mapState('auth', ['errorMessage']),  // Acessar o estado do módulo 'auth'
    },
    methods: {
      ...mapActions('auth', ['loginUser']),  // Mapear a ação 'loginUser' do módulo 'auth'
      async login() {
        await this.loginUser({ email: this.email, password: this.password });
        if (!this.errorMessage) {
          this.$router.push('/dashboard');  // Redireciona para o dashboard após login bem-sucedido
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
  }
  button {
    cursor: pointer;
    width: 100%;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
  }

  button:hover{
    background-color: rgb(85, 85, 250);
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  