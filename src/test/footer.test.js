import React from 'react';
import ReactDOM from 'react-dom'
import Footer from '../components/footer'

describe('Footer component', () => {
  
  it('Footer renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<Footer/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})