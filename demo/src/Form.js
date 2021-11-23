import React from "react";
import rev from "@grid-rbx/rev";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    rev
      .checkForCode(
        this.state.value,
        this.props.code,
        "https://users.roproxy.com/v1/users/"
      )
      .then((result) => {
        if (result === true) {
          alert("Code Found!");
        } else if (result === false) {
          alert("Code not found.");
        } else {
          console.log(result);
        }
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          User ID: &nbsp;
          <input
            type="text"
            name="id"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        &nbsp;
        <input type="submit" value="Check"></input>
      </form>
    );
  }
}

export default Form;
