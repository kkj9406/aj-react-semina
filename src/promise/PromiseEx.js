const onlyPositive = (val) => {
  let pm = new Promise(function (resolve, reject) {
    // executor 제작 코드(producing code). 뭔가 오래 걸리는 일을 하는 구간

    // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

    // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
    setTimeout(() => {
      if (val > 0) {
        resolve(`${val}은 양수가 맞음`);
      } else {
        reject(`${val} : 0 또는 음수는 불가`);
      }
    }, 1000);
  });
  return pm;
};

export const numberCheck = (num) => {
  onlyPositive(num)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("finally");
    });
};
export const numberCheckThen = (num) => {
  onlyPositive(num).then(
    (result) => console.log(result),
    (error) => console.log(error)
  );
};
