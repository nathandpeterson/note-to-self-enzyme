import React from 'react'
import { mount } from 'enzyme'
import Note from '../Note'

// const props = {note: {text: 'test note'}}

describe('Note', function() {
    let note = mount(<Note />)
    it('should renders the note text', () => {})
})