import React from 'react'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
})

const App = () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </Router>
  )
}

export default App
