import React from 'react'
import Message from './Message'

import {create} from 'react-test-renderer'

describe('Message Component Test', () => {
    test('render test', () => {   
        let app=create(<Message />) 
        expect(app.toJSON()).toMatchSnapshot()
    })
})