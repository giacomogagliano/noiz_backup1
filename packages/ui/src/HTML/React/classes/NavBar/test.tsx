export interface ClassA {
  name: string;
  age: number;
  address: "" | "via fuori le mura";
}
export class ClassA {}

const istanzaA = new ClassA();
istanzaA.name = "";
istanzaA.age = 10;
istanzaA.address = "via fuori le mura";

/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////

export interface ClassB {
  name: string;
  age: number;
  address: string;
}
export class ClassB {
  constructor(props: ClassB) {
    this.name = props.name;
    this.age = props.age;
    this.address = props.address;
  }
}

const istanzaB = new ClassB({
  name: "",
  age: 10,
  address: "",
});
