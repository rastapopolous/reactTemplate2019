/*
import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import StatefulLayout from '../src/component/StatefulLayout'

const App = () => {

  return (
    <Router history={browserHistory}>
      <Route path='/' component={StatefulLayout}>
        <IndexRoute component={StatefulLayout} />
        <Route path='why' component={StatefulLayout} />
        <Route path='viewBracelet' component={StatefulLayout} />
      </Route>
    </Router>
  )
}

export default App
*/
import React from 'react'
import Layout from '../src/component/StatefulLayout'

const App = () => {
  return <Layout />
}

export default App
