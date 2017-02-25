import VueRouter from 'vue-router';
import c1 from './test1.vue';
import c2 from './test2.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/test1',
      component: c1
    },
    {
      path: '/test2',
      component: c2
    }
  ]
});

module.exports = router;
