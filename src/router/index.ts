import { createRouter, createWebHistory } from 'vue-router';
import ListagemCurriculos from '../views/ListagemCurriculos.vue';
import CadastroCurriculo from '../views/CadastroCurriculo.vue';
import DetalhesCurriculo from '../views/DetalhesCurriculo.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listagem',
      component: ListagemCurriculos,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroCurriculo,
    },
    {
      path: '/detalhes/:id',
      name: 'detalhes',
      component: DetalhesCurriculo,
      props: true, // Passando o ID como propriedade
    },
  ],
});

export default router;