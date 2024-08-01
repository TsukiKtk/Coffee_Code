<template>
  <div>
    <router-view />
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/new-user">New User</router-link>
        <router-link to="/profile">Profile</router-link>
        
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
