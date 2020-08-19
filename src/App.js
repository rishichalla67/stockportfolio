import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from './Components/Home'

class App extends Component {

  render() {
    return (

        <Router>
          <div className={'App'}>
            <Switch>
              <Route exact path="/Home" component={Home} />


              <Route exact path="/">
                <Redirect to="/Home" />
              </Route>

            </Switch>
          </div>
        </Router>

    );
  }
}
export default App;