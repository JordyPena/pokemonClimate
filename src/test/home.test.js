import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/home'

const handleChange = () => {}
const handleSubmit = () => {}
describe('Home component', () => {
  
  it('Home renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Home
      handleChange={handleChange}
      handleSubmit={handleSubmit}/></BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})