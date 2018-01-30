import React, { Component } from 'react'
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'
import MojsCurveEditor from 'mojs-curve-editor'
import car from '../assets/car.svg'
import closeBush from '../assets/closeBush.svg'
import house from '../assets/house.svg'
import windmill from '../assets/windmill.svg'
import farBush from '../assets/farBush.svg'
import dwell from '../assets/dwell.svg'
import accommodations from '../assets/accommodations.svg'

// const yCurve = new MojsCurveEditor()

// class Car extends mojs.CustomShape {
//   getShape () { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
// }
// mojs.addShape( 'car', Car );


// const mojsPlayer = new MojsPlayer({ add: timeline });

export default class Animation extends Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
      // const timeline = new mojs.Timeline()
      // timeline.add(burst)
      // const mojsPlayer = new MojsPlayer({ add: timeline });
      // timeline.play()
    }
    render() {
      return (
        <div className="animation-container">
          <div className="whitebox anisvg"></div>
          <div className="animation-box">
            <img src={car} className="car anisvg"/>
            <img src={closeBush} className="close-bush anisvg"/>
            <img src={house} className="house anisvg"/>
            <img src={windmill} className="windmill anisvg"/>
            <img src={farBush} className="far-bush anisvg"/>
          </div>
          <div className="brand">
            <img src={dwell} className="dwell one-fitty-seven"/>
            <br />
            <img src={accommodations} className="accommodations one-fitty-seven"/>
          </div>
        </div>
      );
    }
}