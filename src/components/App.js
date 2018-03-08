import React, { Component } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import Note from './Note'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

const cookie_key = 'NOTES'

class App extends Component {
    constructor(){
        super()

        this.state = {text: '', notes: []}
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }

    handleClick(e){
        e.preventDefault()
        const text = this.state.text
        const notes = [{text}, ...this.state.notes]
        this.setState({notes, text: ''})
        bake_cookie(cookie_key, notes)    
    }

    clearNotes(e){
        e.preventDefault()
        delete_cookie(cookie_key)
        this.setState({notes: []})
    } 

    componentDidMount(){
        const notes = read_cookie(cookie_key)

        this.setState({ notes })
    }

    render() {
        return (
            <div>
                <h2>NOTE TO SELF</h2>
                <Form inline>
                    <FormControl onChange={this.handleChange} value={this.state.text} />
                    {' '}
                    <Button onClick={this.handleClick}>SUBMIT</Button>
                </Form>
                {this.state.notes.map((note, i) => {
                    return <Note key={i} note={note}/>
                })}
                <Button onClick={this.clearNotes}>Clear Notes</Button>
            </div>
        )
    }
}

export default App