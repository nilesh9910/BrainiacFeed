import React from 'react';
import './App.css';
import Navbar from './Component/navbar';
import 'materialize-css/dist/css/materialize.min.css'
import Posts from './Component/posts/posts';
import Footer from './Component/footer'

function App() {
  return (
    <div className="App blue-grey lighten-5">
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
