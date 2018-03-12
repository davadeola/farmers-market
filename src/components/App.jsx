import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import MarketList from './MarketList';
import AvailableList from './AvailableList';
function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/marketschedule' component={MarketList}/>
        <Route path='/available' component={AvailableList}/>
      </Switch>
    </div>
  );
}

export default App;
