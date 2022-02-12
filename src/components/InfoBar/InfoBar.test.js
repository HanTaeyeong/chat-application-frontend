import React from 'react'
import InfoBar from './InfoBar'

import {create} from 'react-test-renderer'


describe('InfoBar Component Test', () => {
    test('render test', () => {   
        let app=create(<InfoBar />) 
        expect(app.toJSON()).toMatchSnapshot()
    })
})