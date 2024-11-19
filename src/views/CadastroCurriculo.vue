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
        // Verifica os campos obrigatórios 
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
        console.error('Erro ao cadastrar currículo:', error.response ? error.response.data : error.message);
        alert('Erro ao cadastrar currículo');
      }
    },
  },
};
</script>
<style scoped>
.form-container {
  max-width: 5px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  min-height: 10px;
  resize: vertical;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  background-color: #05884b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

</style>
