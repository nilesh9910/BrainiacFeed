import React from 'react';
import './App.css';
import Navbar from './Component/navbar';
import 'materialize-css/dist/css/materialize.min.css'
import Posts from './Component/posts/posts'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
