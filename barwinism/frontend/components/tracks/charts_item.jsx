import React from 'react'

const chartsItem = (props) => (
  <div className="charts-item">
    <div className="rank">
      {props.rank}
    </div>

    <div className="thumbnail">
      <img src={props.track.song_art_url}/>
    </div>

    <div className="charts-item-attributes">
      <div className="attributes-container">
        <div>{props.track.title.length < 26 ? props.track.title : props.track.title.slice(0, 26) + "..."}</div>
        <span>Lyrics</span>
      </div>
    </div>

    <div className="charts-item-attributes">
      {props.track.artist}
    </div>

    <div className="charts-item-attributes ">
      <div className="attributes-container-img">
        <div id="trending-views">
          <img src={window.flame} />
          40
        </div>

        <div id="all-time-views">
          <img src={window.eye} />
          50.3k
        </div>
      </div>
    </div>
  </div>
);

export default chartsItem;