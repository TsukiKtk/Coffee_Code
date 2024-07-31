import { randomUUID } from 'crypto';

export class User {
  private id: string = "";
  private name: string;
  private age: number;
  
  constructor(name: string, age: number) {
    this.id = randomUUID();
    this.name = name
    this.age = age

  };

  getId(){
    return this.id

  }

  getName(){
    return this.name
    
  }
  setName(name: string) {
    return this.name

  }

  getAge(){
    return this.age
    
  }

  setAge(age: number) {
    return this.age
    
  }
}