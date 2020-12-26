import React from 'react';
import ReactDOM from 'react-dom'
import Home from '../components/home'

const handleChange = () => {}
const handleSubmit = () => {}
describe('Home component', () => {
  
  it('Home renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<Home
      handleChange={handleChange}
      handleSubmit={handleSubmit}/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})