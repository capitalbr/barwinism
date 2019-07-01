import React from 'react'

export default class TrackShow extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {count: 0, update: false}
  }
    componentDidMount(){
      this.props.fetchTrack(this.props.match.params.trackId);
    }

    componentDidUpdate(prevProps){
      if (!this.props.artist && this.props.track) {
        this.props.fetchArtist(this.props.track.artist_id);
      }
      if (!this.props.track){
        this.props.fetchTrack(this.props.match.params.trackId);
      }
      
      // if (prevProps.track.id != this.props.match.params.trackId) {
      //   this.props.fetchTrack(this.props.match.params.trackId);
      // }
      // if (!this.props.albums) {
      //   this.props.fetchTrackAlbums(this.props.track.id);
      // }
    }


  embedYoutube(){
    let i = this.props.track.youtube_url.indexOf("watch?");
    let front = "https://www.youtube.com/";
    let url = front + "embed/" + this.props.track.youtube_url.slice(i+8);
    return(
      <iframe width="560" 
        height="315" 
        src={url} 
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    )
  }  

  render(){
    let albumsHolder;
    if (this.props.albums && this.props.albums.length > 0) {
      albumsHolder = this.props.albums.map(album => {
        return <li><h4>{album.title}</h4></li>
      })
    } else {
      albumsHolder = <li></li>
    }

    let youTube;
    if (this.props.track && this.props.track.youtube_url) {
      youTube = this.embedYoutube();
    } else {
      youTube = ""
    }
    if (this.props.track && this.props.artist){
       return(
         <div className="track-show-header-parent">
          <div className="track-show-header fade-in">
            <div className='shadow'>
              <div className="inner-track-show-header">
                <div className="inner-track-show-header-left">
                  <div className="track-show-song-art">
                  </div>
                </div>
                <div className="track-show-info">
                  <h1>{this.props.track.title}</h1>
                  <h2>{this.props.artist.name}</h2>
                  <div>
                    <span>Album</span>
                    <ul><a href={`#/tracks/${this.props.track.id}`}>{albumsHolder[0]}</a></ul>
                  </div>
                  
                </div>
              </div>
              <div className="inner-track-show-header-right"></div>
            </div>
          </div>
          <div className="track-show-body">
            <div className="track-show-body-left">
              <div className="track-show-body-left-edit">
                <button>Edit Lyrics</button>
              </div>
              <div className="track-show-body-lyrics">
                <p>{this.props.track.body}</p>
              </div>
                <div className="track-show-body-end-flex">
                  
                  
                  <div className="track-show-img-button">
                    <button >
                    <img className="logo" src={window.fb} />
                    </button>
                  </div>
                  <div className="track-show-body-end">
                    <button >Follow</button>
                    <button >Embed</button>
                  </div>
                  
               </div>
            </div>
              <div className="track-show-body-right">
                <div>
                  {youTube}
                </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div>...loading</div>
      )
    }

    
   
  }

}