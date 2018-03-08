import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

describe('App', () => {
    let app = mount(<App/>)

    it('renders the app title', () => {
        // console.log(app.debug())
        expect(app.find('h2').text()).toEqual('NOTE TO SELF')
    })
    it('renders the clear button', () => {
        expect(app.find('.btn').at(1).text()).toEqual('Clear Notes')
    })
    describe('when rendering the form', () => {
        it('creates a form element', () => {
            expect(app.find('Form').exists()).toBe(true)
        })
        it('renders a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true)
        })
        it('renders a submit button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('SUBMIT')
        })
    })

    describe('when creating a note', () => {
        let testNote = 'this is a test!'
        beforeEach(() => {
            app.find('FormControl').simulate('change', {
                target: { value: testNote }
            })
        })
        it('updates the text in the state', () => {
            expect(app.state().text).toEqual(testNote)
        })
        it('and submitting a new note', () => {
            beforeEach(() => {
                app.find('.btn').at(0).simulate('click')
            })
            afterEach(() => {
                app.find('.btn').at(1).simulate('click')
            })
        })
        it('add the new note to state', () => {
            expect(app.state().notes[0].text).toEqual(testNote)
        })

        describe('and remounting the component', () => {
            let app2
            beforeEach(() => {
                app2 = mount(<App />)
            })
            it('reads the stored note cookies', () => {
                expect(app.state().notes).toEqual([{text: testNote}])
            })
        })

        it('and clicking the clear button', () => {
            beforeEach(() => {
                app.find('.btn').at(1).simulate('click')
            })
        })
        it('clears the state', () => {
            expect(app.state().notes).toEqual([])
        })
    })
})