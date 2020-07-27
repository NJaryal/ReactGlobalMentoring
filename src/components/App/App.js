import React from 'react';
import './App.css';
import logo from '../../logo.svg';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Search from '../Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search movietext="Search Movie"/>      
      <img src={logo} className="App-logo" alt="logo" />
      <Footer />
    </div>    
  );
}

export default App;
