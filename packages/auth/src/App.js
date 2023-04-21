import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
})

const App = ({ history, onSignIn, onSignUp }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn}/>
            </Route>
            <Route path="/auth/signup" >
              <Signup onSignUp={onSignUp}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App
