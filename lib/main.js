'use strict';
/**
 * Created by kanziw on 2016. 8. 13..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import firebase from 'firebase';
import Index from './index'
import config from './config';

firebase.initializeApp(config);

const di = {
  firebase,
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" di={di} component={Index}>
      <Route path="about" component={Index}/>
      <Route path="users" component={Index}>
        <Route path="/user/:userId" component={Index}/>
      </Route>
      <Route path="*" component={Index}/>
    </Route>
  </Router>
), document.getElementById('main'));
