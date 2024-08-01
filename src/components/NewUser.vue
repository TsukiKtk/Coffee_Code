<template>
  <div>
    <h1>New User</h1>
    <input v-model="name" placeholder="Name">
    <input v-model="age" type="number" placeholder="Age">
    <button @click="createUser">Create User</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { createUser as createUserApi } from '@/backend/user-cases'; // Import the API function

export default defineComponent({
  setup() {
    const name = ref('');
    const age = ref<number | null>(null);

    const createUser = async () => {
      if (name.value && age.value !== null) {
        try {
          await createUserApi(name.value, age.value);
          name.value = '';
          age.value = null;
        } catch (error) {
          console.error('Error creating user:', error);
          
        }
      }
    };

    return {
      name,
      age,
      createUser
    };
  }
});
</script>
