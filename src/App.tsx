import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/header';
import Footer from './Components/footer';

function App() {
  return (
  <div className="app bg-secondary text-white vh-100 d-flex flex-column justify-content-between">
    <Header></Header>
    <Footer></Footer>
  </div>
  );
}

export default App;
