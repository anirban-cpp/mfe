import React, { Suspense, useState } from 'react'
import Header from './components/Header'
// import MarketingApp from './components/MarketingApp'
// import AuthApp from './components/AuthApp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'
import Progress from './components/Progress'

const MarketingApp = React.lazy(() => import('./components/MarketingApp'))
const AuthApp = React.lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
})

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState()

  console.log('users', users)
  console.log('currentUser', currentUser)

  const SignIn = (user) => {
    let doesUserExist = false

    let usersMap = users ? users : new Map()

    if (user && usersMap && usersMap.has(user?.email)) {
      if (
        user?.password.trim() === usersMap.get(user?.email)?.password.trim()
      ) {
        setCurrentUser(usersMap?.get(user?.email))
        doesUserExist = true
      }
    }

    return doesUserExist
  }

  const SignUp = (user) => {
    let usersMap = users ? users : new Map()
    if (user) {
      usersMap?.set(user?.email, user)
      setUsers(usersMap)
    }
    setCurrentUser(user)
  }

  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            currentUser={currentUser}
            onSignOut={() => setCurrentUser(null)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthApp
                  onSignIn={(user) => SignIn(user)}
                  onSignUp={(user) => SignUp(user)}
                />
              </Route>
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}

export default App
