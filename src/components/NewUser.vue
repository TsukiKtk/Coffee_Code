<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.getId()">
          {{ user.getName() }} - {{ user.getAge() }}
          <button @click="editUser(user.getId())">Edit</button>
          <button @click="removeUser(user.getId())">Delete</button>
        </li>
      </ul>
      <input v-model="newName" placeholder="Name">
      <input v-model="newAge" type="number" placeholder="Age">
      <button @click="addUser">Add User</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { createUser, readAllUsers, readUser, updateUser, deleteUser } from '@/backend/user-cases';
  
  export default defineComponent({
    setup() {
      const users = ref<any[]>([]);
      const newName = ref('');
      const newAge = ref<number | null>(null);
  
      const loadUsers = async () => {
        try {
          users.value = await readAllUsers();
        } catch (error) {
          console.error('Error loading users:', error);
        }
      };
  
      const addUser = async () => {
        if (newName.value && newAge.value !== null) {
          try {
            await createUser(newName.value, newAge.value);
            newName.value = '';
            newAge.value = null;
            await loadUsers();
          } catch (error) {
            console.error('Error creating user:', error);
          }
        }
      };
  
      const editUser = async (id: string) => {
        try {
          const user = await readUser(id);
          const updatedName = prompt('Enter new name:', user.getName());
          const updatedAge = prompt('Enter new age:', user.getAge().toString());
          if (updatedName !== null && updatedAge !== null) {
            await updateUser(id, updatedName, parseInt(updatedAge));
            await loadUsers();
          }
        } catch (error) {
          console.error('Error editing user:', error);
        }
      };
  
      const removeUser = async (id: string) => {
        try {
          await deleteUser(id);
          await loadUsers();
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
  
      onMounted(loadUsers);
  
      return {
        users,
        newName,
        newAge,
        addUser,
        editUser,
        removeUser
      };
    }
  });
  </script>
  