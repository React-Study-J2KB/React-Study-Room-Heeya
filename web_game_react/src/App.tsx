import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginContainer } from './containers/login' 
import { UserRegistContainer } from './containers/regist'
import { IndexContainer } from './containers/index'


import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact={true} path="/" component={IndexContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/regist" component={UserRegistContainer} />
            </Switch>
        </div>
    </Router>
    );
}

export default App;