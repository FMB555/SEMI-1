//Import React
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Import Páginas
import LogIn from './Pages/Login'
import SignUp from './Pages/Signup'
import Password from './Pages/Password'
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
            <Route path='/' component={Home} exact/>
            <Route path='/lote' component={Lote} />
            <Route path='/personal' component={Personal} />
            <Route path='/finanzas' component={Finanzas} />


            <Route path='/login' component={LogIn} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/password' component={Password} />
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
