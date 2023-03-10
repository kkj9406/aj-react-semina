import React, { useState, useEffect } from "react";

function Clock({ time }) {
  const [displayTime, setDisplayTime] = useState("00:00");

  useEffect(() => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    setDisplayTime(`${minutes}:${seconds}`);
  }, [time]);

  return <h1 data-testid="running-clock">{displayTime}</h1>;
}

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const handleStartTimer = () => {
    const inputTime = minutes * 60 + seconds;
    if (inputTime <= 0) {
      return;
    }

    // 이전 타이머를 초기화하고 새로운 타이머를 설정
    clearInterval(timerInterval);
    setTimerInterval(
      setInterval(() => {
        setTime((t) => {
          if (t > 0) {
            return t - 1;
          } else {
            clearInterval(timerInterval);
            setTimerInterval(null);
            return 0;
          }
        });
      }, 1000)
    );
    setTime(inputTime);
  };

  const handleResetTimer = () => {
    // 타이머 초기화
    clearInterval(timerInterval);
    setTimerInterval(null);
    setMinutes(0);
    setSeconds(0);
    setTime(0);
  };

  const handlePauseResumeTimer = () => {
    // 타이머가 실행 중인 경우
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    } else {
      // 타이머가 실행 중이지 않은 경우
      if (time !== 0) {
        // 일시 중지한 시점부터 타이머 시작
        setTimerInterval(
          setInterval(() => {
            setTime((t) => {
              if (t > 0) {
                return t - 1;
              } else {
                clearInterval(timerInterval);
                setTimerInterval(null);
                return 0;
              }
            });
          }, 1000)
        );
      } else {
        // 타이머 시작
        handleStartTimer();
      }
    }
  };

  return (
    <React.Fragment>
      <label>
        <input
          type="number"
          onChange={(e) => setMinutes(parseInt(e.target.value))}
          value={minutes}
        />
        분
      </label>
      <label>
        <input
          type="number"
          onChange={(e) => setSeconds(parseInt(e.target.value))}
          value={seconds}
        />
        초
      </label>
      <button onClick={handleStartTimer}>시작</button>
      <button onClick={handlePauseResumeTimer}>일시 중지 / 재개</button>
      <button onClick={handleResetTimer}>초기화</button>
      <Clock time={time} />
    </React.Fragment>
  );
}

export default Timer;

/*
0분 0초(00:00)에 도달할 때까지 시간을 카운트 다운하는 타이며(running-clock)를 렌더링하는 React 컴포넌트를
구현하시오.

요구사항(Requirements)

기능(Functionality)
HTML 구조는 다움과 같다 :
<label>
    <input type="number">
    Minutes
</label>
<label>
    <input type="number">
    Seconds
</label>

<button>START</button>
<button>PAUSE / RESUME</button>
<button>RESET</button>

<h1 data-testid="running-clock">00:00</h1>

사용자가 입력한 시간 값을 받아 사용자가 카운트다운을 시작 및 일시정지/재시작하고 시계를 재설정할 수
있는 타이머(running-clock)를 구현하시오.

이 과제의 요구사항을 충족하려면 다음을 구현해야 한다.
1. 시간 표시 : 
- 시간은 <h1 data-testid="running-clock">에 표시되고 초기 값은 00:00이다.
- 시간의 표시형식은 mm:ss이다.
- 1분 5초는 01:05와 같이 표시되어야 한다.
- 1분 65초는 02:05와 같이 표시되어야 한다.

2. 입력 : 
- 입력 값을 변경해도 <h1 data-testid="running-clock">에 표시되는 값은 바뀌지 않는다.
- 입력란에 max 또는 min 속성은 필요하지 않다.
- 시계는 음수 값을 처리할 필요 없다. 이것은 솔루션에 포함되지 않으며 평가 대상이 아니다.

3. 동작 : 
1) START 버튼을 클릭하면 입력으로부터 계산한 시간으로 <h1 data-testid="running-clock">에 표시되는 시계
값을 설정하고 카운트다운을 시작한다.
2) 시계가 실행되면 매초마다 표시 시간을 업데이트한다.
3) 시계가 실행된 다음 START 버튼을 클릭하면 입력에 처음 제공된 시간과 동일한 시간으로 시계를 재시작한다.
4) 카운트다운이 끝나고 시계가 00:00에 도달하면 카운트를 멈추고 00:00을 계속 표시한다.
5) PAUSE / RESUME 버튼을 클릭하면 적절히 시계를 일시정지하거나 재시작한다:
    - PAUSE는 카운트다운을 보류한다.
    - RESUME는 중단된 부분부터 카운트다운을 재시작한다.
6) RESET 버튼을 클릭하면 입력란이 모두 0으로 재설정되어야 한다.
7) RESET 버튼을 클릭하면 <h1 data-testid="running-clock">에 표시되는 시간이 00:00으로 재설정되어야 한다.

구현 힌트 & 알림(Implementation hints & notice):
- START 버튼 클릭 시 입력란을 비우지 않는다.
- 일시정지와 재시작 동작에 동일한 버튼 요소를 사용한다.
- 다음 요소는 테스트에 사용되므로 변경해서는 안된다.
    - <input>labels;
    - <button>texts;
    - <h1>element data-testid attribute value.

힌트(Hints)
- react 패키지 임포트만 허용된다.
- 솔루션은 정확성에 기초해 평가될 것이다
- 디자인/스타일링은 평가 대상에서 제외되며 점수에 영향을 미치지 않는다. 요구사항을 구현하는 데만 집중한다.
- 컴포넌트는 Preview 탭에 표시된다. 테스트 목적으로 사용할 수 있다.
- 브라우저의 개발자 도구를 통하여 디버깅 목적으로 console.log 및 console.error를 사용할 수 있다.

사용할 수 있는 패키지/라이브러리(Available packages/libraries)
- React 17.0.1
*/
