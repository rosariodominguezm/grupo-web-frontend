import './App.css';
import React from 'react';
import Routing from './Routing';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import axios from 'axios';
import CookieAuthProvider from './contexts/cookieAuth';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <CookieAuthProvider>
        <NavBar />
      </CookieAuthProvider> */}
        <Routing />
        <Footer />
      </header>
    </div>
  );
}

export default App;
