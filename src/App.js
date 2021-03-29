import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.sass';


const App = () => {

  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    demoAsyncCall().then(() => setLoading(false));
  })

  if(loading) { 
    return null;
  }

  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar/>
        <Fade triggerOnce duration="1000">
          <Route exact path="/" component={Home} />  
        </Fade> 
      </BrowserRouter>   
    </div>
  )
}

const demoAsyncCall = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 3500));
}

export default App;