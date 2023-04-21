import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// mount function to start the app

const mount = (
  el,
  { onNavigate, defaultHistory, initialPath, onSignIn, onSignUp },
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) history.listen(onNavigate)

  ReactDOM.render(
    <App history={history} onSignIn={onSignIn} onSignUp={onSignUp} />,
    el,
  )

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if (pathname !== nextPathname) history.push(nextPathname)
    },
  }
}

// if we ware in development and in isolation, call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#auth-dev-root')
  if (devRoot)
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    })
}

// If we're running our app through container, then export mount
export { mount }
