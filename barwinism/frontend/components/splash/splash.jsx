import React from 'react'
import { Link } from "react-router-dom";
import ChartsContainer from "../tracks/charts_container"

export default class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
   
    return (
      <div className="splash">
       <div className="news">SPLASHITY SPLAHSHITY</div>
      <ChartsContainer/>
      </div>
    )
  }
}