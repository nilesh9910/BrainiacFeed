
import './App.css';
import Navbar from './Component/navbar';
import 'materialize-css/dist/css/materialize.min.css'
import Posts from './Component/posts/posts';
import Footer from './Component/footer';

import React, { Component } from 'react';

export class App extends Component {
      constructor(props) {
        super(props);
        this.state = { height: 512 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  render() {
    let contclass = this.state.width < 1280 ? '' : 'container' ;
    console.log(contclass)
    return (
      <div className="App blue-grey lighten-5">
        <Navbar contclass={contclass} />
        <Posts contclass={contclass}/>
        <Footer contclass={contclass} />
      </div>
    )
  }
}

export default App
