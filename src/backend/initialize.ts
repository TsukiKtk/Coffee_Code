export class User {
  private id: string;
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.id = crypto.randomUUID(); // Utilize um método para gerar IDs únicos
    this.name = name;
    this.age = age;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }
}
