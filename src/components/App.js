import React, { Component } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
class App extends Component {

    state = {text: ''}

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }

    handleClick = () => {
        this.setState({text: ''})        
    }

    render() {
        return (
            <div>
            <h2>NOTE TO SELF</h2>
            <Form inline>
                <FormControl onChange={this.handleChange} />
                {' '}
                <Button onClick={this.handleClick}>SUBMIT</Button>
            </Form>
            </div>
        )
    }
}

export default App