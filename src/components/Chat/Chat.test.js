import React from 'react'
import Chat from './Chat'

import {create} from 'react-test-renderer'


describe('Chat Component Test', () => {
    test('render test', () => {   
        let app=create(<Chat />) 
        expect(app.toJSON()).toMatchSnapshot()
    })
})