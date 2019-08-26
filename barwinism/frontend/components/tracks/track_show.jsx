import React from 'react';
import marked from 'marked';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ReactDOM from 'react-dom';


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
      clickAway: false
    };
    this.toggle = true;
    this.count = 0;
    this.refresh = true;
  }
    componentDidMount(){
      this.props.fetchTrack(this.props.match.params.trackId)
        .then(() => {
          this.setState({
          lyrics: this.props.track.body})
        })
    }
    

    componentDidUpdate(prevProps){
      if (!this.props.artist && this.props.track) {
        this.props.fetchArtist(this.props.track.artist_id);
      }

      const bodyTag = document.getElementById('theBody');
      if (bodyTag) {
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
    document.getElementsByClassName('youTube')[0].classList.remove('display-none');

    e.preventDefault();
    this.deleteSelected();
    const annotation = {
      id: this.props.annotations[this.id].id,
      body: document.getElementsByTagName("textarea")[0].value,
      track_id: this.state.track_id,
      anno_id: e.target.getAttribute("data-anno-id"),
      upvotes: this.state.upvotes
    }
    this.props.updateAnnotation(annotation);
    
    let body = document.getElementsByClassName("theBody")[0].innerHTML;
    this.props.updateTrack({
      body: body,
      id: this.props.track.id
    });
    
    // let annoEditor = document.getElementsByClassName('hidden')[0];
    // annoEditor.remove();
    this.setState({formType: ""})
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
    // const oldPopup = document.getElementsByClassName('click-to-annotate')[0];
    // if (oldPopup) {
    //   oldPopup.remove();
    // }
    if (this.state.formType !== "") {
      this.setState({ formType: "" });
    }
    const selection = window.getSelection();
    let valid = selection.anchorNode.nodeName === "#text" && 
      selection.anchorNode === selection.focusNode &&
      selection.anchorNode.parentNode === document.getElementsByClassName("theBody")[0];
    // selection.focusNode.nodeName
    // "#text"

    // if (window.getSelection().toString().length > 0) {
    //   document.getElementsByClassName('youTube')[0].classList.add('display-none');
    // }
    if (selection.toString().length > 0) {
      this.deleteSelected(false);
    } else {
      this.deleteSelected();
      let video = document.getElementsByClassName('youTube')[0];
      if (video) {
        video.classList.remove('display-none');
      }
    }
    // let id;
    if (selection.rangeCount && selection.toString().length > 0 && valid) {
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
        body: "Your annotation is blank!",
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

      // this.setState({ formType: 'displayPopup'});
      // let popup = document.createElement('span');
      // popup.addEventListener("click", this.annotationPopupEditor.bind(this));
      // popup.setAttribute('class', 'click-to-annotate');
      // let textNode = document.createTextNode("Start the Genius Annotation");
      // popup.appendChild(textNode);

      // // AFTER I SETUP THE HIDING OF THE RIGHT COLUMN ELEMENTS ON CLICK 
      // //I'M GOING TO PUT THE 'textNode' IN THE RIGHT COLUMN
      // let y = window.scrollY + replacement.getBoundingClientRect().top;
      // popup.style.marginTop = `${y-380}px`;
      // popup.style.height = 'fit-content';


      // let right = document.getElementsByClassName('track-show-body-right');
      // $(right).append($(popup));
      // let targetDiv = document.getElementById("popup");
      
      // // ReactDOM.render(<Root store={store} />, root);
      // targetDiv.appendChild(popup);
    } else if (!e.target.classList.contains('delete-selected') &&
        selection.toString().length === 0){
          
          this.deleteHighlighted(this.id)
          this.getAnno(e);
        } else {
          
          document.getElementsByClassName('youTube')[0].classList.remove('display-none');
          this.deleteSelected(true, true);
    };
 }



 showPopup(){
  if (!document.getElementById(this.id)) {
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
  
  document.getElementsByClassName('youTube')[0].classList.remove('display-none');
  let parent = document.getElementsByClassName('theBody')[0];
  
  const oldChild = document.getElementById(id);
  if (oldChild) {
    const replacement = document.createTextNode(oldChild.textContent);
    parent.replaceChild(replacement, oldChild);
    
    // DELETES THE FORM OFF OF THE PAGE
    // this.deleteAPopupEditor();
  
    // toggles the boolean so it will be ready to allow 
    //the next form that pops up
    this.toggle = !this.toggle;
  
    if (!noUpdate) {
      this.props.updateTrack({
        body: parent.innerHTML,
        id: this.state.track_id
      }).then(this.setState({ lyrics: parent.innerHTML }))
    }
    // this.deleteSelected();
  }
  

}   

deleteSelected(command = true, valid = false) {
  let parent = document.getElementsByClassName('theBody')[0];
  
  const oldChildren = $('.delete-selected');
  
  oldChildren.each((i, child) => {
    const replacement = document.createTextNode(child.textContent);
    // parent.replaceChild(replacement, child);
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
  // let lyrics;
  // if (popup) {
  //   // lyrics = this.pastLyrics;
  //   this.deleteSelected(false);
  //   lyrics = document.getElementsByClassName('theBody')[0].innerHTML; 
  // } else {
  //   lyrics = document.getElementsByClassName('theBody')[0].innerHTML; 
  // }
  
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
  // if (oldPopup) {
  //   oldPopup.remove();
  // }
  
  let val = e.target;
  // if (oldForm && !this.toggle && !val.classList.contains('click-to-annotate')) {
  //   oldForm.remove();
    
  // }
  this.toggle = !this.toggle;

}
  
// TO PRACTICE FOR SITUATIONS WHERE I CAN'T USE JSX
// USING ONLY HTML DOM METHODS.
  annotationPopupEditor(){
    let video = document.getElementsByClassName('youTube')[0];
    

    // REMOVES 'Start the Genius Annotation' POPUP
    // this.setState({ formType: "" });
    // const oldPopup = document.getElementsByClassName('click-to-annotate')[0];
    // if (oldPopup) {
    //   oldPopup.remove();
    // }
    //ADDS HIGHLIGHTING TO THE NEWLY CREATED LYRIC SPAN 
    let currentAnno = document.getElementById(this.id)
    if (currentAnno) {
      currentAnno.classList.add('highlight');
      currentAnno.classList.remove('delete-selected');
      currentAnno.classList.remove('highlight-blue');

      if (video) {
        video.classList.add('display-none');
      }

      // let anno = document.getElementById(this.id);
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
    

    return (
      <ClickAwayListener onClickAway={(e) => this.hider(e, "highlight")}>
        <div
          className="hidden"
          style={{
            marginTop: `${this.margin}px`
          }}>
          <img src={window.annotation_arrow} className="logo"/>
            <div className="annotation">
              <form id="editor-form">
                <div className="form-div-outer">
                  <textarea
                    id="editor"
                    placeholder="Don't just put the lyric in your own words-drop some knowledge!"
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
                      data-anno-id={this.id}
                      onClick={this.onSave.bind(this)}>
                      Save
                  </button>
                    <button
                      className="annotation-cancel"
                      onClick={this.deleteHighlighted.bind(this, this.id)}>
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

  deleteAPopupEditor(){
    this.setState({formType: ""});
    // let parent = document.getElementsByClassName('track-show-body-right')[0];
    // let child = document.getElementsByClassName('hidden')[0];
    // if (parent instanceof Node && child instanceof Node) {
    //   parent.removeChild(child);
    // }
  }

  getAnno(e){
    e.preventDefault();
    if (e.target.id === "theBody" || e.target.id === "") {
      return
    } else {
      this.hider(e);
      const current_annotation = this.props.annotations[e.target.id];
      let current_annotation_marked;
      if (current_annotation) {
        current_annotation_marked = $(marked(current_annotation.body));
        this.setState({ 
          formType: "displayAnno",
          current_anno: e.target.id,
          anno_body: current_annotation_marked.html()
          });
      } else {
        this.setState({
          formType: "displayAnno",
          current_anno: e.target.id
        });
      }
      // this.setState({ current_anno: e.target.id });
      // const current_annotation = this.props.annotations[e.target.id];
      // let current_annotation_marked = $(marked(current_annotation.body));
      // this.setState({
      //   anno_body: current_annotation_marked.html()
      // })
   
    }
  }

  showAnno(){
    let annoMargin = document.getElementById(this.state.current_anno);
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
              <button className="annotation-edit">Edit</button>
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
      this.setState({editForm: true});
    } else {
      this.setState({editForm: false});
    }
  }

  renderEditBody(){
    const htmlLyrics = `<span>${this.state.body}</span>`;
    let ele = document.createElement('div');
    ele.innerHTML = htmlLyrics;
    let value= ele.textContent;
    
    return(
      <div contentEditable="true" id="theBody" defaultValue={value}></div>
    )
  }

  // prepareHighlighter(e){
  //   // this.setState({ clickAway: true });
  //   this.highlighter(e);
  // }

  renderLyricBody(){
    return(
      <p id="theBody"
        onMouseUp={this.highlighter.bind(this)}
        // onClick={this.getAnno.bind(this)}
      ></p>
    )
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
      youTube = this.embedYoutube();
    } else {
      youTube = ""
    }

    // let clickAway;
    // if (this.state.clickAway === true){
    //   clickAway = <ClickAwayListener onClickAway={this.hider.bind(this)}>
    //       <div id="popup"></div>
    //     </ClickAwayListener>
    // } else {
    //   clickAway = <div className="display-hidden" id="popup"></div>
    // }

    
    if (this.props.track && this.props.artist){
     
       return(
         <div className="track-show-header-parent">
           <div className="track-show-header fade-in">
            <div className='shadow'>
              <div className="inner-track-show-header">
                <div className="outer-track-show-header-left">
                  <div className="inner-track-show-header-left">
                   <img src={this.props.track.song_art_url} />
                  <div className="track-show-song-art">
                  </div>
                </div>
                </div>
                
                <div className="track-show-info">
                  <h1>{this.props.track.title}</h1>
                  <h2>{this.props.artist.name}</h2>
                  <div>
                    <span>Albums</span>
                    <ul><a href={`#/tracks/${this.props.track.id}`}>{albumsHolder}</a></ul>
                  </div>
                  
                </div>
              </div>
              <div className="inner-track-show-header-right"></div>
            </div>
          </div>
          <div className="track-show-body">
            <div className="track-show-body-left">
              <div className="track-show-body-left-edit">
                <button onClick={this.showEdit.bind(this)}>Edit Lyrics</button>
              </div>
              <div className="track-show-body-lyrics">
                <pre>
                   {editBody}
                </pre>
                 
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
                {formOutput}
                {/* {clickAway} */}
                <div id="popup"></div>

                
                <div className="youTube">
                  <div>Music Video</div>
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