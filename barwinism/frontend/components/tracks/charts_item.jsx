import React from 'react'


const viewGenerator = (type) => {
  let views = Math.floor(Math.random() * Math.floor(5000));
  if (type === "trending") {
    let val = Math.floor(Math.random() * Math.floor(20))
    return val !== 0 ? val : 1;
  }
  if (views < 1000) {
    return <span>{views.toString()}</span>
  } else {
    let thousandsOfViews = views / 1000;
    if (thousandsOfViews !== Math.floor(thousandsOfViews)
      && thousandsOfViews.toString()[2] !== "0") {
      return <span>{thousandsOfViews.toString()[0] + "." + thousandsOfViews.toString()[2] + "k"}</span>
    } else {
      return <span>{Math.floor(thousandsOfViews).toString() + "k"}</span>
    }
  }
}

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

    <div id="artist-name" className="charts-item-attributes">
      <div>{props.track.artist}</div>
    </div>

    <div className="charts-item-attributes ">
      <div className="attributes-container-img">
        <div className="views-trending">
          <img src={window.flame} />
          <p>{viewGenerator("trending")}</p>
        </div>

        <div className="views-all-time">
          <img src={window.eye} />
          <p>{viewGenerator()}</p>
        </div>
      </div>
    </div>
  </div>
);

export default chartsItem;