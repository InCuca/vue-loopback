import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Login from './view/Login.vue';
import Dashboard from './view/Dashboard.vue';
import Profile from './view/Profile.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name: 'dashboard'},
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {requiresAuth: true},
    }, {
      path: '/login',
      name: 'login',
      component: Login,
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile,
      // eslint-disable-next-line camelcase
      props: route => ({access_token: route.query.access_token}),
      meta: {requiresAuth: true},
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page (except when it's profile route and
    // there is an access_token).
    if (to.name === 'profile' && to.query.access_token) {
      next();
    } else if (!store.state.auth.access_token) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
