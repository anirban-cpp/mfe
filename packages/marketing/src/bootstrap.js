import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// mount function to start the app

const mount = (el) => {
  ReactDOM.render(<App/>, el)
}

// if we ware in development and in isolation, call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) mount(devRoot)
}

// If we're running our app through container, then export mount
export { mount }
