<template>
  <div v-if="curriculo">
    <h1>Detalhes do Currículo</h1>
    <p><strong>Nome:</strong> {{ curriculo.nome }}</p>
    <p><strong>Telefone:</strong> {{ curriculo.telefone || 'Não informado' }}</p>
    <p><strong>Email:</strong> {{ curriculo.email }}</p>
    <p><strong>Endereço WEB:</strong> {{ curriculo.endereco_web || 'Não informado' }}</p>
    <p><strong>Experiência Profissional:</strong> {{ curriculo.experiencia_profissional }}</p>
    <router-link to="/">Voltar para a listagem</router-link>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        curriculo: null  
      };
    },
    async created() {
  const id = this.$route.params.id; 
  try {
    const response = await fetch(`http://localhost:3000/api/curriculos/${id}`);
    if (!response.ok) {
      throw new Error('Currículo não encontrado');
    }
    this.curriculo = await response.json();
    console.log(this.curriculo);
  } catch (error) {
    console.error('Erro ao buscar detalhes do currículo:', error);
    alert('Erro ao buscar detalhes do currículo. Verifique o ID ou tente novamente mais tarde.');
  }
}
  };
  </script>