console.log('Hello!!');
alert('Hello Javascript!');

let str = 'Hello Javascript';
let number = 30;
console.log('문자열:', str);
console.log('number:', number);

function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
console.log('-----');
sayHello();

let obj = {
  number: 30, //프로퍼티(속성)
  sayHello: function () {
    console.log('Obj Hello1');
    console.log('Obj Hello2');
    console.log('Obj Hello3');
  },
};

console.log(obj);
console.log(obj.number);
obj.sayHello();
