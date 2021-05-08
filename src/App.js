 import React from 'react';
import NavBar from './Navigation/Navbar';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Subscription from './pages/Subscription';
import Footer from './Navigation/Footer';

function App() {
  return (
    <>
      <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/subscription' component={Subscription}/>
      </Switch>
      </Router>   
      <Footer/>   
    </>
  );
}

export default App;
