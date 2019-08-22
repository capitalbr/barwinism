import React from 'react'

const chartsItem = (props) => (
  <div className="charts-item">
    <div className="rank">
      {props.rank}
    </div>

    <div>
      <img src={props.track.song_art_url}/>
    </div>

    <div className="charts-item-attributes">
      {props.track.title}
    </div>

    <div className="charts-item-attributes">
      {props.track.artist}
    </div>
  </div>
);

export default chartsItem;