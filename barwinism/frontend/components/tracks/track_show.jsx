import React from 'react'

export default class TrackShow extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {count: 0, update: false}
  }
    componentDidMount(){
      this.props.fetchTrack(this.props.match.params.trackId);
    }

    componentDidUpdate(){
      if (!this.props.artist) {
        this.props.fetchArtist(this.props.track.artist_id);
      }
      if (!this.props.album) {
        this.props.fetchAlbum(this.props.track.album_id);
      }
      
      
      // if (this.state.count === 0) {
      //   this.setState({update: true, count: 1});
      // }
    }

  render(){
    if (this.props.track && this.props.artist && this.props.album){
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
                  <h4>Album <div>{this.props.album.title}</div></h4>
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