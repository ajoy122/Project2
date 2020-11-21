import React from 'react';
import {Router, Route,IndexRoute, browserHistory} from 'react-router-dom';

import './global.css'
import './App.css'
import './nav.css'
import './Aside.css'
import Navigate from './Navigate';

// import logo from './logo.svg';
// import './App.css';

function Master() {
 

  return (
    <Router history = {browserHistory}>
      <Route path = "/" component = {<Navigate />}>
         <IndexRoute component = {<Navigate />} />
      </Route>
   </Router>
  );
}

export default Master;
