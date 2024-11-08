<template>
  <div>
    <h1>Cadastro de Currículo</h1>
    <form @submit.prevent="cadastrarCurriculo">
      <div>
        <label>Nome:</label>
        <input v-model="nome" required />
      </div>
      <div>
        <label>Telefone:</label>
        <input v-model="telefone" /> 
      </div>
      <div>
        <label>Email:</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Endereço Web:</label>
        <input v-model="enderecoWeb" type="url" />
      </div>
      <div>
        <label>Experiência Profissional:</label>
        <textarea v-model="experienciaProfissional" required></textarea>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nome: '',
      telefone: '',
      email: '',
      enderecoWeb: '',
      experienciaProfissional: ''
    };
  },
  methods: {
    async cadastrarCurriculo() {
      try {
        // Verificando se os campos obrigatórios foram preenchidos
        if (!this.nome || !this.email || !this.experienciaProfissional) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return;
        }

        const response = await axios.post('http://localhost:3000/api/curriculos', {
          nome: this.nome,
          telefone: this.telefone,
          email: this.email,
          enderecoWeb: this.enderecoWeb,
          experienciaProfissional: this.experienciaProfissional,
        });

        alert('Currículo cadastrado com sucesso!');
        this.nome = '';
        this.telefone = '';
        this.email = '';
        this.enderecoWeb = '';
        this.experienciaProfissional = '';
      } catch (error) {
        console.error('Erro ao cadastrar currículo:', error);
        alert('Erro ao cadastrar currículo');
      }
    },
  },
};
</script>
