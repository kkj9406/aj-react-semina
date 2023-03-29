function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

const who = new Person("Absolem");
who.greet(); // 출력: "Hello, my name is Absolem"
