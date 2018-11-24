import React, { Component } from "react";
import "./App.css";

type FunctionProps = {
  str: string
};

const FunctionTest = (props: FunctionProps) => {
  return <h4>{props.str}</h4>;
};

type TestProps = {
  str: string,
  num?: number,
  ary: Array<number>
};

type TestState = {
  message: string
};

class Test extends Component<TestProps, TestState> {
  state = {
    message: "Hello"
  };

  static defaultProps = {
    str: "Annamalai",
    num: '25'
  };

  h2: ?HTMLHeadingElement;

  render() {
    return (
      <div className="testApp">
        <h1>{this.props.str}</h1>
        <h1>{this.props.num}</h1>
        <ul>
          {this.props.ary.map(val => {
            return <li>{val}</li>;
          })}
        </ul>
        <h2 ref={h => (this.h2 = h)}>{this.state.message}</h2>
      </div>
    );
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Test ary={[1, 2, 3]} />
        <FunctionTest str="John" />
      </div>
    );
  }
}

export default App;
