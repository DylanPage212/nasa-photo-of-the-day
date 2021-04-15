import React from "react";
import "./App.css";
import Header from './components/header'
import Nasa from './components/nasa'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
  <Header />
  <Nasa />
  <Footer />
    </div>
  );
}

export default App;
