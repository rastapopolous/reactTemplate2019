
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StatefulComponent from '../StatefulComponent/StatefulComponent';

const App = () => {
  return (
    <div className=''>
      <Switch>
        <Route exact path='/' component={StatefulComponent} />
        <Route path='/members' component={StatefulComponent} />
      </Switch>
    </div>
  );
};

export default App;
