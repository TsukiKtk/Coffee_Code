<template>
  <div>
    <router-view />
    <nav class="nav_links_home">
        <div class="links">
          <router-link to="/">Home</router-link>
          <router-link to="/new-user">New User</router-link>
          <router-link to="/profile">Profile</router-link>
          <router-link to="/calc">Calc</router-link>
        </div>        
      </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

</script>

<style scoped>
nav {
  margin-bottom: 20px;

}

nav a {
  margin-right: 10px;

}
</style>
