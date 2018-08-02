import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import StatefulLayout from '../component/StatefulLayout'

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={LayoutContainer}>
        <IndexRoute component={GetStarted} />
        <Route path='why'  component={WhyBracelet} />
        { /*this will need to be several container components w varying children */ }
        <Route path='viewBracelet' component={BraceletBox} />
      </Route>
    </Router>
  )
}

export default App
