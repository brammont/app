import React from 'react'
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,
  Switch,Route
} from 'react-router-dom';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Productos/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SingUp/SignUp';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/services' component={Services} />
      <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;