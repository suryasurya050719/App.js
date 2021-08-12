import React from 'react';
import  ReactDOM  from 'react-dom';
import Login from '../import/Login';
import Home from '../import/Home';
//import BaseLogin from './component/import/BaseLogin';
import Registor from '../import/Registor';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import '../../../src/App.scss';


function App() {
  return (
     <div id='Login' >
       <div className='container'>
         <div className="row login-box">
          <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/Registor' component={Registor}></Route>
            <Route path='/Home' component={Home}></Route>
          </Switch>
          </BrowserRouter> 
         </div>
       </div>
     </div>
  );
}

export default App;
