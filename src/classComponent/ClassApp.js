// react class component
import React, { Component } from "react";

export default class ClassApp extends Component {
  ////////////////////////////////////마운트 start////////////////////////////////////
  constructor(props) {
    super(props);
    console.log("constructor : 생성자. 컴포넌트 만들때 가장 먼저 호출");
    this.state = {
      number: 1, // 초기값 1
      color: "", // 최초 state의 color는 없음
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // 마운트, 업데이트 둘다
    console.log(
      "getDerivedStateFromProps : props 로 받아온 것을 state 에 넣어주고 싶을 때 사용"
    );
    //다른 생명주기 메서드와는 달리 앞에 static 을 필요로 하고, 이 안에서는 this 롤 조회 할 수 없다
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
    //이 메서드는 컴포넌트가 처음 렌더링 되기 전에도 호출 되고, 그 이후 리렌더링 되기 전에도 매번 실행
  }
  componentDidMount = () => {
    console.log(
      "componentDidMount : 컴포넌트의 첫번째 렌더링이 마치고 나면 호출되는 메서드.이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태"
    );
  };
  ////////////////////////////////////마운트 end////////////////////////////////////

  ////////////////////////////////////업데이트 start////////////////////////////////////
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다
    return nextState.number % 10 !== 4;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate : 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환하면 그 다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용을 할 수 있"
    );
    if (prevProps.color !== this.props.color) {
      return prevProps.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate : 리렌더링이 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드",
      prevProps,
      prevState
    );
    if (snapshot) {
      console.log("업데이트 되기 직전 색상: ", snapshot);
    }
  }
  ////////////////////////////////////업데이트 end////////////////////////////////////
  ////////////////////////////////////언마운트 start////////////////////////////////////
  componentWillUnmount() {
    console.log(
      "componentWillUnmount : 컴포넌트가 화면에서 사라지기 직전에 호출"
    );
  }
  ////////////////////////////////////언마운트 end////////////////////////////////////
  render() {
    console.log(
      "render : 렌더링 메서드. 최초 렌더링 이후 상태 변경시 호출된다"
    );
    return (
      <div>
        <div>state color = {this.state.color}</div>
        <div>state number = {this.state.number}</div>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
