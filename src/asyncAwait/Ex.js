export const async1 = async () => {
  return "async1";
};

export const async2 = async () => {
  return Promise.resolve("async2"); //  명시적으로 promise 객체를 반환시키는 것도 가능하다. 근데 이경우는 async 키워드는 필요없음
};

export const await1 = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000); // 1초후 완료 메세지 resolve 호출하는 promise 객체
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
};
export const await2 = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000); // 1초후 완료 메세지 resolve 호출하는 promise 객체
  });

  let result = promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
};
export const await3 = async () => {
  await Promise.reject(new Error("에러 발생!")); // throw처럼 동작한다
};
export const await4 = () => {
  throw new Error("에러 발생!");
};
export const await5 = async () => {
  try {
    let response = await fetch("http://유효하지-않은-주소");
  } catch (err) {
    console.log("catch로 잡음");
    alert(err); // TypeError: failed to fetch
  }
};
export const await6 = async () => {
  let response = await fetch("http://유효하지-않은-주소");
};
