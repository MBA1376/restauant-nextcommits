import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router , Route} from 'react-router-dom';

/**authentication */
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser , logoutUser} from  './actions/authActions';
import jwt_decode from 'jwt-decode';

import Navbar from './components/layout/Navbar';
import GeneralPage from './components/layout/GeneralPage';

import './App.css';

//check for token
if(localStorage.jwtToken) {
  //set authToken header auth
  setAuthToken(localStorage.jwtToken);
  //decode the token and get the info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={GeneralPage} />
            {/* <GeneralPage /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
