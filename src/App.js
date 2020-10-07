import React from 'react';
import Home from './Componentes/Home'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={Home} exact />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
