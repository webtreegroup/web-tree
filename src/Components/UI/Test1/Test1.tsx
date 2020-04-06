import React from "react";

class Test1 extends React.PureComponent<any>{
  
  constructor(props: Readonly<any>) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('mount - test');
  }

  componentDidUpdate() {
    console.log('update - test');
  }

  render() {
    return (
      <button onClick={this.props.onClick}>click</button>
    );
  }
  
}

export default Test1;
