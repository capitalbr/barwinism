import React from 'react'
import { Link } from "react-router-dom";
import ChartsItem from "./charts_item"
export default class CreateTrack extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchTracks();
  }

  render(){
    let list = this.props.tracks.map((track, i) => {
      return <li key={track.id}><Link to={`/tracks/${track.id}`}><ChartsItem track={track} rank={i+1}/></Link></li>
    })
    return(
      <div id="charts"> 
        <div id="charts-inner-div">
          <h1>ALL SONGS</h1>
        </div>
        <div id="charts-lower-div">
          <ul>{list}</ul>
        </div>          
      </div>
    )
  }
}