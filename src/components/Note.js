import React, { Component } from 'react'

class Note extends Component {

    render() {
        console.log((this.props.note));
        
        return (
            <div className='note'>
                <p>{this.props.note}</p>
            </div>
        )
    }
}

export default Note