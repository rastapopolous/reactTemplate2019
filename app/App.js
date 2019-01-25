
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StatefulLayout from '../src/component/StatefulLayout'

const App = () => {
  return (
    <div className=''>
      <Switch>
        <Route exact path='/' component={StatefulLayout} />
        <Route path='/members' component={StatefulLayout} />
      </Switch>
    </div>
  )
}

export default App
