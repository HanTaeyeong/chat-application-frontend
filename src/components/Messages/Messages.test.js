import React from 'react'
import Messages from './Messages'

import {create} from 'react-test-renderer'

describe('Messages Component Test', () => {
    test('render test', () => {   
        let app=create(<Messages />) 
        expect(app.toJSON()).toMatchSnapshot()
    })
})