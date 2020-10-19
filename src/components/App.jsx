import React, { Component } from "react";

// const App = (props) => {
//     return <h1> Will trade {props.item} for code! </h1>;
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: true,
      placeholder: "number of cats to trade"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleButtonClick = () => {
    this.setState({ ready: !this.state.ready });
  };

  render() {
    if (this.state.ready) {
      return (
        <>
          <h1>Will trade {this.props.item} for code!</h1>
          <input
            type="text"
            placeholder={this.state.placeholder}
            onChange={(event) => this.handleInputChange(event)}
            value={this.state.value}
          ></input>
          <button className="button" onClick={this.handleButtonClick}>
            Click for Trade
          </button>
        </>
      );
    } else {
      return (
        <>
          <h1>Loading...</h1>
          {/* <h1>{this.props.text}</h1>
          <input placeholder={this.props.placeholder}></input> */}
          <button className="button" onClick={this.handleButtonClick}>
            Click for Trade
          </button>
        </>
      );
    }
  }
}

export default App;
