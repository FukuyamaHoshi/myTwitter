// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Form from './conpornent'

document.addEventListener('DOMContentLoaded', () => {

  let dom = document.querySelector('#root');

  ReactDOM.render(<Form/>, dom);
})
