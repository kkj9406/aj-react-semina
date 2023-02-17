const func1 = () => {
  setTimeout(() => {
    console.log("func1");
  }, 1000); // 1초 텀을 준다
};
const func2 = (callback) => {
  setTimeout(() => {
    console.log("func2");
    callback();
  }, 1000); // 1초 텀을 준다
};
const func3 = () => {
  setTimeout(() => {
    console.log("1초");
    setTimeout(() => {
      console.log("2초");
      setTimeout(() => {
        console.log("3초");
        setTimeout(() => {
          console.log("4초");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
export const funcCall = () => {
  func1();
  func2(func1);
  func3();
};
