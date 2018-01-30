import React, { Component } from 'react';
import Animation from './components/animation'
import Navbar from './components/navbar'
import Landing from './components/landing'
import './css/animation.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAnimating: true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isAnimating: false})
    }, 9000);
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className={`animation-component ${this.state.isAnimating ? null : 'goine'}`}>
          <Animation/>
        </div>
        <Landing/>
      </div>
    );
  }
}

export default App;
