import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={e => this.handleChange(e)} name="firstName" value={this.state.firstName} />
          <input type="text" onChange={e => this.handleChange(e)} name="lastName" value={this.state.lastName} />
        </form>
      </div>
    );
  }

}

export default Form;
