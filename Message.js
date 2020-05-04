import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Message extends React.Component {
  state = {
    toggle: false,
  };

  onToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <a href="#" onClick={this.onToggle}>
          Want to buy a new car?
        </a>
        {this.state.toggle && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);
