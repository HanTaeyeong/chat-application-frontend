import React from 'react'
import Input from './Input'

import {create} from 'react-test-renderer'


describe('Input Component Test', () => {
    test('render test', () => {   
        let app=create(<Input />) 
        expect(app.toJSON()).toMatchSnapshot()
    })
})