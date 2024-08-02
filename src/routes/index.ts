import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'; // Adjust the path as necessary
import NewUser from '@/components/NewUser.vue'; // Adjust the path as necessary
import UserManagement from '@/components/UserManagement.vue'; // Adjust the path as necessary
import Calc from '@/components/Calc.vue'; // Adjust the path as necessary

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-user',
    name: 'NewUser',
    component: NewUser

  },
  {
    path: '/profile/:id',
    name: 'UserManagement',
    component: UserManagement

  },
  {
    path: '/calc',
    name: 'Calc',
    component: Calc

  }

];

const router = createRouter({
  history: createWebHistory(),
  routes

});

export default router;
