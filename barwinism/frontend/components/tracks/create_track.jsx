import React from 'react'
import { tags } from '../../util/tags'

export default class CreateTrack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      sound_cloud_url: "",
      youtube_url: "",
      primary_tag: "",
      artist_input: "",
      album_input: {}
    }
  }
 
  componentDidUpdate(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTrack(this.state)
    .then(payload => {
      return this.props.history.push(`/tracks/${payload.payload.track.id}`)
    })
    
  }

  albumScript(e){
    let id = Object.keys(this.state.album_input).length;
    this.state.album_input[id] = "";
    let ele = document.getElementById("add-album-script");
    let outerDiv = document.createElement("div");
    let innerInput = document.createElement("input");
    innerInput.setAttribute('size', '30');
    innerInput.setAttribute('type', 'text');
    let that = this;
    innerInput.addEventListener('change', (e) => {
      let dummy = that.state.album_input;
      dummy[id] = e.target.value;
      that.setState({album_input: dummy});
    });
    let innerDiv = document.createElement("div");
    innerDiv.appendChild(innerInput);
    outerDiv.appendChild(innerDiv);
    
    ele.appendChild(outerDiv);
  }

  renderErrors() {
    if (this.props.errors.length < 1) {
      return;
    }
    return (
      <div>
        <span>Whoops</span>
        <ul>
          <h5>There must be some mistake</h5>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return(
      <div className="add-track-color">
         <div className="add-track-container">
          <div className="add-track-main">
            <h1>Add Song</h1>
            <div className="errors">{this.renderErrors()}</div>
            <small>* required</small>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h3>Primary Info</h3>
              <div className="add-track-primary-info">
                <div>
                  <label>
                    By * <br/>
                    <input type="text" 
                      placeholder="The primary artist, author, creator, etc."
                      value={this.state.artist_input}
                      onChange={this.update("artist_input")}
                    />
                  </label>
                  <br/>
                  <label>
                    Title * <br/>
                    <input type="text"
                      placeholder="Title"
                      value={this.state.title}
                      onChange={this.update("title")}
                    />
                  </label>
                  <label className="add-track-primary-info-primary-tag">Primary tag *</label>
                  <div className="primary-tag-radio">
                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="rap"
                          onClick={this.update("primary_tag")}
                        />
                        Rap
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag" 
                          value="pop"
                          onClick={this.update("primary_tag")}
                        />
                        Pop
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="r&b"
                          onClick={this.update("primary_tag")}
                        />
                        R&B
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="rock"
                          onClick={this.update("primary_tag")}
                        />
                         Rock
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="country"
                          onClick={this.update("primary_tag")}
                        />
                         Country
                      </label>
                    </div>
                      <div>
                        <label>
                          <input type="radio" name="tag"
                          value="non music"
                          onClick={this.update("primary_tag")}
                          />
                          Non Music
                        </label>
                      </div>
                    
                  </div>
                    <span>Note: If you're not sure which tag to use please 
                      select “Pop”— you can add secondary tags later
                    </span>
                </div>
                <div>
                </div> 
              </div>
              <div className="add-track-lyrics">
                <div className="add-track-lyrics-column-1">
                  <label htmlFor="create-song-form-lyrics-section">Lyrics *</label>
                  <br/>
                  <textarea 
                    onChange={this.update("body")}
                    value={this.state.body}
                  ></textarea>
                </div>
                <div></div>
                </div>
                <h3 className="additional-info-header">Audio & Video</h3>
                <div className="additional-info">
                  <div className="additional-info-audio-video">
                    <label>
                      SOUNDCLOUD URL:
                      <input 
                        onChange={this.update("sound_cloud_url")}
                        value={this.state.soundCloudUrl}
                        />
                    </label>

                    <label>
                      YOUTUBE URL:
                        <input 
                        onChange={this.update("youtube_url")}
                        value={this.state.youtubeUrl}
                        />
                    </label>
                  </div>
                  <div className="additional-info-audio-video album">
                    <div className="heading">Albums, and secondary tag</div>
                      <div>
                        <label>Album:</label>
                        <br/>
                        <a onClick={this.albumScript.bind(this)} href="#/add-song">Add album</a>
                    <div id="add-album-script"></div> 
                      </div>
                      
                    <label className="tags">Tags:</label>
                    <div className="tags-div">
                      {tags}
                    </div>
                  </div>
                </div>
                <hr/>
                <input className="submit" type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
     
    )
  }

}