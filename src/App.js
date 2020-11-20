import './App.css';
import React from 'react';
import Headers from './Components/Header/Headers';
import Routes from './Routes';
import Footer from './Components/Footer/index';

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
