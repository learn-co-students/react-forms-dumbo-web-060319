import React from 'react'

export default class Form extends React.Component {

    state = {
        firstName: "kevin",
        lastName: "lai"
    }

    handleFirstNameInput = (event) => {
        console.log(event.target.value)
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameInput = (event) => {
        console.log(event.target.value)
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('First Name: ', this.state.firstName)
        console.log('Last Name: ', this.state.lastName)

    }

    render() {

        return(
            <form onSubmit={this.handleSubmit} >
                <input 
                    onChange={this.handleFirstNameInput} 
                    type='text' name='firstName' 
                    value={this.state.firstName} 
                />
                <br></br>
                <input 
                    onChange={this.handleLastNameInput} 
                    type='text' name='lastName' 
                    value={this.state.lastName} 
                />
                <br></br>
                <input type='submit' />
            </form>
        )
    }
}