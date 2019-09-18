import React from 'react';
import marked from 'marked';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ReactDOM from 'react-dom';
import {
  FacebookShareButton,
  TwitterShareButton
} from 'react-share';


export default class TrackShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      track_id: this.props.match.params.trackId,
      upvotes: "",
      anno_id: "",
      formType: "",
      current_anno: "",
      editForm: false,
      lyrics: "",
      anno_body: "",
      popup: "",
      clickAway: false,
      fetchedNews: false,
      shouldRenderProposal: false,
      shouldSetFadeOut: false
    };
    this.toggle = true;
    this.count = 0;
    this.refresh = true;
    this.fetchSent = false;
    this.stopRender = true;
  }
    componentDidMount(){
      this.props.fetchTrack(this.props.match.params.trackId)
        .then( () => {
          this.setState({
          lyrics: this.props.track.body
        })})
      
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    

    componentDidUpdate(prevProps){
      
      const editDiv = document.getElementById("editDiv");
      if (editDiv) {
        setTimeout(() => {
          $("#editDiv").fadeOut(1400);
        }, 2500);
        if (this.stopRender) {
          this.setState({ shouldRenderProposal: false });
        } else {
          this.stopRender = true;
        }
      }

      if (!this.props.artist && this.props.track) {
        this.props.fetchArtist(this.props.track.artist_id);
      }
      if (this.props.track && this.fetchSent === false){
        this.fetchSent = true;
        this.props.fetchSongNews(this.props.track.title.split(" ").join("+"))
        .then(() => {
          this.setState({fetchedNews: true});
        });
      }
      const bodyTag = document.getElementById('theBody');
      if (bodyTag && !this.state.editForm) {
        const htmlLyrics = `<span>${this.state.lyrics}</span>`;
        $(bodyTag).empty();
        $(bodyTag).append($(htmlLyrics).addClass("theBody"));
      }
        
      if (!this.props.track){
        this.props.fetchTrack(this.props.match.params.trackId);
      }
      if (this.props.match.params.trackId !== prevProps.match.params.trackId){
        this.props.fetchTrack(this.props.match.params.trackId);
      }
      if ($('.delete-selected').length > 0 && this.refresh) {
        this.deleteSelected();
        this.refresh = false;
      }
    }

  update(field){
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    }
  }

  onSave(e){
    
    e.preventDefault();
    this.deleteSelected();
    let id = this.id || this.state.current_anno;
    const annotation = {
      id: this.props.annotations[id].id,
      body: document.getElementsByTagName("textarea")[0].value,
      track_id: this.state.track_id,
      anno_id: e.target.getAttribute("data-anno-id"),
      upvotes: this.state.upvotes
    }
    
    this.props.updateAnnotation(annotation)
      .then( () => {
    
        this.setState({
          formType: "displayAnno",
          anno_body: document.getElementsByTagName("textarea")[0].value
        })
      
      });
  }

  embedYoutube(){
    let i = this.props.track.youtube_url.indexOf("watch?");
    let front = "https://www.youtube.com/";
    let url = front + "embed/" + this.props.track.youtube_url.slice(i+8);
    return(
      <iframe width="100%" 
        height="100%" 
        src={url} 
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen="1"
        ></iframe>
    )
  }  

  highlighter(e) {
    if (this.state.formType !== "") {
      this.setState({ formType: "" });
    }
    const selection = window.getSelection();
    let valid = selection.anchorNode && selection.anchorNode.nodeName === "#text" && 
      selection.anchorNode === selection.focusNode &&
      selection.anchorNode.parentNode === document.getElementsByClassName("theBody")[0];
    
    if (selection.toString().length > 0) {
      this.deleteSelected(false);
    } else {
      this.deleteSelected();
      let video = document.getElementsByClassName('youTube')[0];
      if (video) {
        video.classList.remove('display-none');
      }
    }
    
    if (selection.rangeCount && selection.toString().length > 0 && valid) {
      if (document.getElementsByClassName("hidden")[0]) {
        this.deleteHighlighted(this.id)
      }
      document.getElementsByClassName('youTube')[0].classList.add('display-none');
      const replacement = document.createElement('span');
      this.id = `${this.props.track.id}-${Math.random()}`;
      
      replacement.setAttribute('id', this.id);
      replacement.setAttribute('class', 'parent');

      replacement.setAttribute('class', 'delete-selected highlight-blue');
    
      replacement.textContent = selection.toString();
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(replacement);

      let y = window.scrollY + replacement.getBoundingClientRect().top;
      this.margin = y - 380;

      const annotation = {
        body: "",
        track_id: this.state.track_id,
        anno_id: this.id,
        upvotes: this.state.upvotes
      }
      this.props.createAnnotation(annotation);

      let parent = document.getElementsByClassName('theBody')[0];
      this.pastLyrics = this.state.lyrics;

      
      this.props.updateTrack({
        body: parent.innerHTML,
        id: this.state.track_id
      }).then(this.setState({ 
        lyrics: parent.innerHTML,
        formType: 'displayPopup' 
      }))

    } else if (!e.target.classList.contains('delete-selected') &&
        selection.toString().length === 0){
          if (document.getElementsByClassName("hidden")[0]){
            this.deleteHighlighted(this.id)
          }
          this.getAnno(e);
        } else {
          if (document.getElementsByClassName("hidden")[0]) {
            this.deleteHighlighted(this.id)
          }
          document.getElementsByClassName('youTube')[0].classList.remove('display-none');
          this.deleteSelected(true, true);
    };
 }



 showPopup(){
  if (!document.getElementById(this.id)) {
    let video = document.getElementsByClassName('youTube')[0];
    if (video) {
      video.classList.remove('display-none');
    }
    return;
  }
  return(
    <ClickAwayListener onClickAway={ (e) => this.hider(e, true)}>
    <span 
      onClick={this.annotationPopupEditor.bind(this)}
      className="click-to-annotate"
      style={{
        top: `${this.margin}px`,
        height: 'fit-content'
      }}>
      <div>
        Start the Genius Annotation
      </div>
    </span>
    </ClickAwayListener>
  )
 }

deleteHighlighted(id, noUpdate = false){
  if (this.cancelButtonBackToDisplayAnno){
    this.setState({formType: 'displayAnno'})
    return;
  }
  document.getElementsByClassName('youTube')[0].classList.remove('display-none');
  let parent = document.getElementsByClassName('theBody')[0];
  
  const oldChild = document.getElementById(id);
  if (oldChild) {
    const replacement = document.createTextNode(oldChild.textContent);
    parent.replaceChild(replacement, oldChild);
    
    this.toggle = !this.toggle;
  
    if (!noUpdate) {
      this.props.updateTrack({
        body: parent.innerHTML,
        id: this.state.track_id
      }).then(this.setState({ lyrics: parent.innerHTML }))
    }
    
  }
}   

deleteSelected(command = true, valid = false) {
  let parent = document.getElementsByClassName('theBody')[0];
  
  const oldChildren = $('.delete-selected');
  
  oldChildren.each((i, child) => {
    const replacement = document.createTextNode(child.textContent);
    child.parentNode.replaceChild(replacement, child);
  })

  if (!valid) {
    valid = oldChildren.length > 0
  }
  if (valid && command) {  
    this.props.updateTrack({
      body: parent.innerHTML,
      id: this.state.track_id
    }).then(this.setState({ lyrics: parent.innerHTML }));
  }
}   


hider(e, popup = false){
  let video = document.getElementsByClassName('youTube')[0];
    if ( video ){
      video.classList.remove('display-none');
    }
  
  switch (popup) {
    case true:
      this.deleteSelected(false);
    case "highlight":
      this.deleteHighlighted(this.id, true);
  }

  let lyrics = document.getElementsByClassName('theBody')[0].innerHTML;

  this.props.updateTrack({
      body: lyrics,
      id: this.state.track_id
    });
    this.setState({ 
      formType: "", 
      current_anno: "", 
      lyrics: lyrics
    });
    
    
  
  const oldForm = document.getElementsByClassName('hidden')[0];
    
  const oldPopup = document.getElementsByClassName('click-to-annotate')[0];
  
  this.toggle = !this.toggle;
}
  
// TO PRACTICE FOR SITUATIONS WHERE I CAN'T USE JSX
// USING ONLY HTML DOM METHODS.
  annotationPopupEditor(){
    let video = document.getElementsByClassName('youTube')[0];
    
    //ADDS HIGHLIGHTING TO THE NEWLY CREATED LYRIC SPAN 
    let currentAnno = document.getElementById(this.id)
    if (currentAnno) {
      currentAnno.classList.add('highlight');
      currentAnno.classList.remove('delete-selected');
      currentAnno.classList.remove('highlight-blue');

      if (video) {
        video.classList.add('display-none');
      }

      let y = window.scrollY + currentAnno.getBoundingClientRect().top;
      let val = y - 565;
      if ((y - 565) < 0) {
        val = 0;
      }
      this.margin = val;
      
      const annotation = {
        id: this.props.annotations[currentAnno.id].id,
        track_id: this.state.track_id,
        anno_id: this.id,
        upvotes: this.state.upvotes
      }
      this.props.updateAnnotation(annotation);
  
      this.cancelButtonBackToDisplayAnno = false;

      let body = document.getElementsByClassName("theBody")[0].innerHTML;
      this.props.updateTrack({
        body: body,
        id: this.props.track.id
      }).then( res => {
        this.setState({ 
          formType: "editAnno",
          lyrics: this.props.track.body
         });
      })
    }
    



  }

  showEditor(){
    
    let id = this.id || this.state.current_anno ;
    let annoMargin = document.getElementById(id);
    let y;
    if (annoMargin) {
      y = window.scrollY + annoMargin.getBoundingClientRect().top;
    } else {
      y = -565;
    }
    let val = y - 565;
    if ((y - 565) < 0) {
      val = 0;
    }

    let styles = {
      marginTop: `${val}px`,
    };

    let currentAnno = this.props.annotations[id]
    if (currentAnno) {
      currentAnno = currentAnno.body;
    } else {
      currentAnno = "";
    }

    return (
      <ClickAwayListener onClickAway={(e) => this.hider(e, "highlight")}>
        <div
          className="hidden"
          style={styles}
          >
          <img src={window.annotation_arrow} className="logo"/>
            <div className="annotation">
              <form id="editor-form">
                <div className="form-div-outer">
                  <textarea
                    id="editor"
                    placeholder="Don't just put the lyric in your own words-drop some knowledge!"
                    defaultValue={currentAnno}
                  >
                  
                  </textarea>
                  <div className="tools">
                    <div className="tools-title">
                      <span className="tools-content">
                        Tools:
                    </span>
                    </div>
                    <div className="tools-options">
                      <span className="tools-content2">
                        Add Image
                    </span>
                      <span className="tools-content2">
                        Formatting Help
                    </span>
                      <a className="tools-content2">
                        How To Annotate
                    </a>
                    </div>
                  </div>
                  <hr className="hr"></hr>
                  <div className="button-div">
                    <button
                      className="annotation-save"
                      data-anno-id={id}
                      onClick={this.onSave.bind(this)}>
                      Save
                  </button>
                    <button
                      className="annotation-cancel"
                      onClick={(e) => this.onCancel(e, id)}>
                      Cancel
                  </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </ClickAwayListener>
    )
  }

  onCancel(e, id){
    e.preventDefault();
    this.deleteHighlighted(id);
    this.hider();
  }

  deleteAPopupEditor(){
    this.setState({formType: ""});
  }

  getAnno(e){
    e.preventDefault();
    if (e.target.id === "theBody" || e.target.id === "") {
      return;
    } else {
      this.hider(e);
      const current_annotation = this.props.annotations[e.target.id];
      let current_annotation_marked;
      if (current_annotation) {
        this.id = e.target.id;
        current_annotation_marked = $(marked(current_annotation.body));
        this.setState({ 
          formType: "displayAnno",
          current_anno: e.target.id,
          anno_body: current_annotation_marked.html()
          });
      } else {
        return;
      }
    }
  }

  setFormType(e, type){
    e.preventDefault();
    switch (type) {
      case "editAnno":
        this.cancelButtonBackToDisplayAnno = true;
        this.setState({formType: type});
    }
  }

  showAnno(){
    let id = this.id || this.state.current_anno
    let annoMargin = document.getElementById(id);
    let y;
    if (annoMargin) {
      y = window.scrollY + annoMargin.getBoundingClientRect().top;
    } else {
      y = -565;
    }
    let val = y - 565;
    if ((y - 565) < 0) {
      val = 0;
    }

    let styles = {
      marginTop: `${val}px`,
    };

    return (<ClickAwayListener onClickAway={this.hider.bind(this)}><div className="hidden2"
        style={styles}>
      <img src={window.annotation_arrow}/>
      <div className="title-and-contributors">
        <span>Genius Annotation</span>
        <span>1 Contributor</span>
      </div>
      <div className="annotation">
        <form>
          <div>
            <p readOnly id="display-anno" dangerouslySetInnerHTML={{__html: this.state.anno_body} }>         
            </p>
           
            <hr></hr>
            <div>
              <button 
                className="annotation-edit"
                onClick={(e) => this.setFormType(e, "editAnno")}
                >Edit</button>
            </div>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <svg></svg>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </ClickAwayListener>
    )
  }
 
  showEdit(e){
    e.preventDefault();
    if (this.state.editForm === false) {
      this.setState({
        editForm: true
      });
    } else {
      this.stopRender = false;
      this.setState({
        editForm: false,
        shouldRenderProposal: true,
        shouldSetFadeOut: true
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  renderProposal(){
    let trackTitle;
    if (this.props.track) {
      trackTitle = this.props.track.title
    }
    if (this.state.shouldRenderProposal) {
      let oldEditMessage = document.getElementById("editDiv");
      if (oldEditMessage) {
        oldEditMessage.style.display = null;
      } else {
        return <div id="editDiv">You created a lyric proposal for {trackTitle}</div>
      }
    }
  }

  renderEditBody(){
    let ele = document.createElement('div');
    ele.innerHTML = this.state.lyrics;
    for (let i = 0; i < ele.children.length; i++) { 
      const replacement = document.createTextNode(ele.children[i].textContent);
      ele.replaceChild(replacement, ele.children[i]);
    }
    let value= ele.textContent;
    return(
      <div contentEditable="true" id="theBody">{value}</div>
    )
  }

  renderLyricBody(){
    return(
      <p id="theBody"
        onMouseUp={this.highlighter.bind(this)}
      ></p>
    )
  }

  renderPicture(num){
    let picture;
    if (this.props.track) {
      picture = this.props.track.song_art_url;
    }
    
    if (picture) return picture;
    if (!this.state.fetchedNews) {
      return;
    } else {
      if (this.props.news.length > 0) {
        if (!this.onesWithImg) {
          this.onesWithImg = this.props.news[0].filter(news => news.image);
        }
        return this.onesWithImg[num] ? this.onesWithImg[num].image.contentUrl : window.smiley;
      } else if (this.mounted){
        return window.smiley;
      }
    }
  }


  render(){
    let formOutput;
    
    if (this.state.formType === "displayAnno") {   
      formOutput = this.showAnno();
    } else if (this.state.formType === "editAnno") {
      formOutput = this.showEditor(this.id);
    } else if (this.state.formType === "displayPopup") {
      formOutput = this.showPopup();
    } else {
      formOutput = "";
    }

    let editBody;
    if (this.state.editForm) {
      editBody = this.renderEditBody();
    } else {
      editBody = this.renderLyricBody();
    }


    let albumsHolder;
    if (this.props.albums && this.props.albums.length > 0) {
      albumsHolder = this.props.albums.map((album, idx) => {
        if (idx === this.props.albums.length -1) {
          return <li key={`album-${idx}`}><h4>{album.title}</h4></li>
        }
        return <li key={`album-${idx}`}><h4>{album.title},</h4></li>
      })
    } else {
      albumsHolder = <li></li>
    }
    
    let youTube;
    if (this.props.track && this.props.track.youtube_url) {
      youTube = <div className="youTube">
        <div>Music Video</div>
        {this.embedYoutube()}
        </div>;
    } else {
      youTube = ""
    }
    let trackTitle, trackArtist, trackId;
    if (this.props.track) {
      trackTitle = this.props.track.title
      trackId = this.props.track.id
    } else if (this.props.artist){
      trackArtist = this.props.artist.name
    }

    let editOrSubmit;
    if (this.state.editForm) {
      editOrSubmit = "Propose This Edit"
    } else {
      editOrSubmit = "Edit Lyrics"
    }

    return(
      <div className="track-show-header-parent">
        <div className="track-show-header fade-in">
        <div className="background-img-container">
          <img src={this.renderPicture(1)} />
        </div>
        <div className='shadow'>
          <div className="inner-track-show-header">
            <div className="outer-track-show-header-left">
              <div className="inner-track-show-header-left">
                <img src={this.renderPicture(2)} />
              <div className="track-show-song-art">
              </div>
            </div>
            </div>
            
            <div className="track-show-info">
              <h1>{trackTitle}</h1>
              <h2>{trackArtist}</h2>
              <div>
                <span>Albums</span>
                <ul><a href={`#/tracks/${trackId}`}>{albumsHolder}</a></ul>
              </div>
              
            </div>
          </div>
          <div className="inner-track-show-header-right"></div>
        </div>
      </div>
      <div className="track-show-body">
        <div className="track-show-body-left">
          <div className="track-show-body-left-edit">
            <button onClick={this.showEdit.bind(this)}>{editOrSubmit}</button>
          </div>
          {this.renderProposal()}
            
          <div className="track-show-body-lyrics">
            <pre>
                {editBody}
            </pre>
              
          </div>
            <div className="track-show-body-end-flex">
              <div className="track-show-img-button">
                <FacebookShareButton 
                  className="fb-share-button"
                  url="https://www.linkedin.com/in/bradley-b-53b118102/"
                  quote={trackTitle}
               >
                <img className="logo" src={window.fb} />
                </FacebookShareButton>
              </div>
              <div className="track-show-body-end">
                <button >Share</button>
              </div>
              
            </div>
        </div>
          <div className="track-show-body-right">
            {formOutput}
            <div id="popup"></div>
              {youTube}
        </div>
      </div>
    </div>
    )
  }

}