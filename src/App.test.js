import { create, act } from 'react-test-renderer'
import App from './App';

test('App render test', () => {
  let app;
  act(() => {
    app = create(<App />)
  })
  expect(app.toJSON()).toMatchSnapshot()
})
