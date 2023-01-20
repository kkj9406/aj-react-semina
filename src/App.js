import { useState } from "react";
import ClassApp from "./classComponent/ClassApp";
import scope1 from "./scope/scope1";
import scope2 from "./scope/scope1";
// scope1();

(function () {
  var MYAPP = {};

  MYAPP.student = {
    name: "Lee",
    gender: "male",
  };

  console.log(MYAPP.student.name);
})();
// console.log(MYAPP.student.name);

function App() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        color blue로 변경
      </button>
      <ClassApp color={color} />
    </div>
  );
}
export default App;
