import { useState } from "react";
import ClassApp from "./classComponent/ClassApp";
import scope1 from "./scope/scope1";
import scope2 from "./scope/scope1";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseRef2 from "./hooks/UseRef2";
import UseContext from "./hooks/UseContext";
import UseMemo from "./hooks/UseMemo";
import UseMemo2 from "./hooks/UseMemo2";
import UseCallback from "./hooks/UseCallback";
import UseCallback2 from "./hooks/UseCallback2";
import UseReducer from "./hooks/UseReducer";
import UseReducer2 from "./hooks/UseReducer2";
import { funcCall } from "./callback/Callback";
import { numberCheck, numberCheckThen } from "./promise/PromiseEx";
import {
  async1,
  async2,
  await1,
  await2,
  await3,
  await4,
  await5,
  await6,
} from "./asyncAwait/Ex";

function App() {
  async1().then(console.log); // async 키워드를 붙였는데 promise처럼 쓸수 있다
  async2().then(console.log); // async 키워드를 붙였는데 promise처럼 쓸수 있다
  // await1();
  // await2();
  // await3().then(console.log).catch(console.log);
  // await4();
  await5()
    .then(console.log)
    .catch((err) => {
      console.log("promise catch로 잡음");
    });
  await6()
    .then(console.log)
    .catch((err) => {
      console.log("promise catch로 잡음");
    });
  return <div>헤헤</div>;
}
export default App;
