import React from 'react'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </Router>
  )
}

export default App
