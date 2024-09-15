import Vue from 'vue';
import Router from 'vue-router';
import ButtonDemoPage from '@/views/ButtonDemoPage.vue'; // Переконайтеся, що шлях правильний

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/button-demo',
      name: 'ButtonDemoPage',
      component: ButtonDemoPage
    },
    {
        path: '/searchable-dropdown-demo',
        name: 'SearchableDropdownDemo',
        component: SearchableDropdownDemo
    },
  ]
});
