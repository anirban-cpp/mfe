import React, { Suspense } from 'react'
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
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}

export default App
