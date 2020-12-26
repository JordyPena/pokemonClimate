import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from '../components/landingPage'

const handleChange = () => {}
describe('LandingPage component', () => {
  
  it('LandingPage renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<LandingPage
      handleChange={handleChange}/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})