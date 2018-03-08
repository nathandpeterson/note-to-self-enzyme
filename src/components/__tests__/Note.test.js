import React from 'react'
import { mount } from 'enzyme'
import Note from '../Note'

const props = {note : 'abc'}

describe('Note', function() {
    let note = mount(<Note note={props.note} />)
    it('should renders the note text', () => {
        expect(note.find('p').text()).toEqual('abc')
    })
})