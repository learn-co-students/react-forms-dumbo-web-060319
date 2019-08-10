// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component{
    state={
        firstName:'',
        lastName:''
    }

    handleFirstNameChange = event => {
        this.setState({
          firstName: event.target.value
        })
      }

     handleLastNameChange=(e)=>{
        this.setState({
            lastName:e.target.value
        })
    }
    render(){
        return(
            <form>
                <input onChange={event => this.handleFirstNameChange(event)}  type='text' name='firstName' value={this.state.firstName} />
                <input onChange={event => this.handleLastNameChange(event)} type="text" name="lastName" value={this.state.lastName} />
            </form>
        )
    }
}