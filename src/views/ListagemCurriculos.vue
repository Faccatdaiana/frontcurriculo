<template>
  <div>
    <h1>Lista de Currículos</h1>
    <ul>
      <li v-for="curriculo in curriculos" :key="curriculo.id">
        <router-link :to="`/detalhes/${curriculo.id}`">{{ curriculo.nome }} - {{ curriculo.email }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curriculos: []
    };
  },
  async created() {
  try {
    const response = await fetch('http://localhost:3000/api/curriculos');
    if (!response.ok) {
      throw new Error('Erro ao buscar currículos');
    }
    this.curriculos = await response.json();
  } catch (error) {
    console.error('Erro ao buscar currículos:', error);
    alert('Erro ao carregar a lista de currículos. Tente novamente mais tarde.');
  }
}
};
</script>