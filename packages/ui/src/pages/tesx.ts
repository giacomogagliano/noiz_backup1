export {};
interface Aaa {
  a: string;
}
class Aaa {
  stringify() {
    return Buffer.from(JSON.stringify(this)).toString(
      "base64"
    );
  }
}
const nu = new Aaa();
nu.a = "ciao";
const nuw = new Aaa();
nuw.a = "ciao";
let arr = [1, 2, 3, 4, 5, 2, 4, 5, 3, 4, 5, 4];
console.log(nuw.stringify());
