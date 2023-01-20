const scope2 = () => {
  (function () {
    var MYAPP = {};

    MYAPP.student = {
      name: "Lee",
      gender: "male",
    };

    console.log(MYAPP.student.name);
  })();

  //   console.log(MYAPP.student.name);
};
export default scope2;
