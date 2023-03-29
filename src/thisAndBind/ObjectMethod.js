const person = {
  name: "Dodo",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // 출력: "Hello, my name is Dodo"
