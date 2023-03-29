const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
// `this` 값이 바뀌지 않도록 `bind`를 사용합니다.
const boundGreet = person.greet.bind(person);

const otherPerson = {
  name: "Hatter",
  greet: person.greet,
};
const anotherPerson = {
  name: "Cheshire",
  greet: boundGreet,
};

// `boundGreet`를 전달하거나 호출할 때 `this` 값은 `person` 객체를 가리킵니다.
boundGreet(); // 출력: "Hello, my name is Alice"

setTimeout(() => {
  otherPerson.greet();
}, 1000); // 1초 후 출력: "Hello, my name is ?"

setTimeout(() => {
  anotherPerson.greet();
}, 2000); // 2초 후 출력: "Hello, my name is ?"
