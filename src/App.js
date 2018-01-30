import React, { Component } from 'react';
import Animation from './components/animation'
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
        <div className={`animation-component ${this.state.isAnimating ? null : 'goine'}`}>
          <Animation/>
        </div>
        <div>WOOOOOOOOO ACTUAL SITE WILL GO HERE</div>
      </div>
    );
  }
}

export default App;
