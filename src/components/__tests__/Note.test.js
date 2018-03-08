import React from 'react'
import { mount } from 'enzyme'
import Note from '../Note'

const props = {note: {text : 'abc'}}

describe('Note', function() {
    let note = mount(<Note {...props} />)
    it('should render the note text', () => {
        expect(note.find('p').text()).toEqual('abc')
    })
})