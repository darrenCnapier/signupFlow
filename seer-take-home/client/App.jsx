import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupDisplay from './components/SignupDisplay.jsx';
import VerificationDisplay from './components/VerificationDisplay.jsx';
import ConfirmationDisplay from './components/ConfirmationDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='center'>
        <Router>
          <Switch>
            <Route path="/" exact component={SignupDisplay} />
            <Route path="/verification" component={VerificationDisplay} />
            <Route path="/confirmation" component={ConfirmationDisplay} />
          </Switch>
        </Router>
      </div>
    );
  };

};

export default App;