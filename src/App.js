//Import React
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Import Páginas
import LogIn from './Pages/Login'
import Home from './Pages/Home'
import Lote from './Pages/Lote'
import Personal from './Pages/Personal'
import Finanzas from './Pages/Finanzas'

//Import Styles
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' component={LogIn} exact />
            <Route path='/home' component={Home} />
            <Route path='/lote' component={Lote} />
            <Route path='/personal' component={Personal} />
            <Route path='/finanzas' component={Finanzas} />
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
