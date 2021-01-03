import React from 'react';
import ReactDOM from 'react-dom'
import Login from '../components/login'

const history = {
  action: "REPLACE"
}
describe('Login component', () => {
  
  it('Login renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<Login history={history}/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})