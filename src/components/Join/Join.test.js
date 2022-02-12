import React from 'react'
import App from '../../App'
import {create, act} from 'react-test-renderer'


describe('Join Component Test', () => {
    test('render test', () => {   
        let app=create(<App />) 
        expect(app.toJSON()).toMatchSnapshot()
    })
})