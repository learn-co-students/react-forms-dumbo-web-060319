import React, { Component } from 'react';

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      </div>
    );
  }

}

export default ControlledInput;
