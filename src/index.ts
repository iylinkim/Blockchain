class Human{
  //public, private 은 Typescript에만 있음
  public name: string;
  private age: number;
  public gender: string;
  constructor(name:string, age:number, gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const me = new Human("Iylin", 18,"female");

const sayHi = (person:Human):string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(me));

export {};
