import logo from "./logo.svg";
import "./App.css";
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
