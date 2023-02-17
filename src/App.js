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

function App() {
  // funcCall();
  numberCheck(1);
  numberCheck(0);
  numberCheck(-1);
  numberCheckThen(1);
  numberCheckThen(0);
  numberCheckThen(-1);

  return <div>헤헤</div>;
}
export default App;
