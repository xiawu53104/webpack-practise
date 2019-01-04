class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi () {
    console.log('hello, my name is ' + this.name);
  }
}

let xiaoming = new Person('xiaoming', 18);
xiaoming.sayHi();

let t = function () {
  return new Promise(resolve => {
    resolve('test');
  })
}

t().then(data => console.log('test'));