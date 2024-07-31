import { User } from "./initialize";

class Users {
    private allUsers: User[] = []; 

    createUser(name: string, age: number) { 
        const user = new User(name, age)
        this.allUsers.push(user)

    }
    
    readAllUsers() { 
        const users = this.allUsers;
        return users
    }

    readUser(id: string ) {
        const users = this.allUsers.find(tr => tr.getId() === id
        )
        if (!users) throw new Error("Não encontrado")
        return users
    
     }

    updateUser(id: string) { }

    deleteUser(id: string ){ }
}