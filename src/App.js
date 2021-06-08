

import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {FirebaseState} from './content/firebase/FirebaseState'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';
import {Alert} from './components/Alert';
import { AlerState } from "./content/AlertState";

function App() {
  
  

  
  return (
    <FirebaseState>
    <AlerState>
    <BrowserRouter>
    <Navbar/>
    <Alert/>
    <div className = "container pt-4">
    <Switch>
      <Route path={'/'} exact component={Home} />
      <Route path={'/about'}  component={About} />
    </Switch>
       
      </div>
      </BrowserRouter>
      </AlerState>
      </FirebaseState>
  );
}

export default App;


