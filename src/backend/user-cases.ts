// src/backend/user-cases.ts
import { User } from './initialize';

class Users {
  private allUsers: User[] = [];

  createUser(name: string, age: number) {
    const user = new User(name, age);
    this.allUsers.push(user);
  }

  readAllUsers() {
    return this.allUsers;
  }

  readUser(id: string) {
    const user = this.allUsers.find((us) => us.getId() === id);
    if (!user) throw new Error('User not found');
    return user;
  }

  updateUser(id: string, name?: string, age?: number) {
    this.allUsers = this.allUsers.map((us) => {
      if (us.getId() === id) {
        if (name !== undefined) us.setName(name);
        if (age !== undefined) us.setAge(age);
      }
      return us;
    });
  }

  deleteUser(id: string) {
    this.allUsers = this.allUsers.filter((us) => us.getId() !== id);
  }
}

// Instância global
const usersInstance = new Users();

export const createUser = (name: string, age: number) => {
  usersInstance.createUser(name, age);
};

export const readAllUsers = () => {
  return usersInstance.readAllUsers();
};

export const readUser = (id: string) => {
  return usersInstance.readUser(id);
};

export const updateUser = (id: string, name?: string, age?: number) => {
  usersInstance.updateUser(id, name, age);
};

export const deleteUser = (id: string) => {
  usersInstance.deleteUser(id);
};
