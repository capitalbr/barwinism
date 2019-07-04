import React from 'react';
import marked from 'marked';


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
      editForm: false
    };
    this.toggle = true;
  }
    componentDidMount(){
      this.props.fetchTrack(this.props.match.params.trackId);
    }
    

    componentDidUpdate(prevProps){
      if (!this.props.artist && this.props.track) {
        this.props.fetchArtist(this.props.track.artist_id);
      }

      const bodyTag = document.getElementById('theBody');
      if (bodyTag) {
        const htmlLyrics = `<span>${this.props.track.body}</span>`;
        $(bodyTag).empty();
        $(bodyTag).append($(htmlLyrics).addClass("theBody"));
      }
        
      if (!this.props.track){
        this.props.fetchTrack(this.props.match.params.trackId);
      }
      if (this.props.match.params.trackId !== prevProps.match.params.trackId){
        this.props.fetchTrack(this.props.match.params.trackId);
      }
      if ($('#editor').length > 0) {
        this.initializeEditor();
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
    const annotation = {
      body: document.getElementsByTagName("textarea")[0].value,
      track_id: this.state.track_id,
      anno_id: e.target.getAttribute("data-anno-id"),
      upvotes: this.state.upvotes

    }
    this.props.createAnnotation(annotation);
    let body = document.getElementsByClassName("theBody")[0].innerHTML;
    this.props.updateTrack({
      body: body,
      id: this.props.track.id
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
    const oldPopup = document.getElementsByClassName('click-to-annotate')[0];
    if (oldPopup) {
      oldPopup.remove();
    }
    const selection = window.getSelection();
    let id;
    if (selection.rangeCount && selection.toString().length > 0) {
      const replacement = document.createElement('span');
      
      // GIVING THE NEW SPAN A UNIQUE ID
      let count = document.getElementsByClassName('theBody')[0].children.length;
      // let count = this.htmlLyrics.children.length;
      id = `${this.props.track.id}-${count + 1}`;
      debugger
      replacement.setAttribute('id', id);
      replacement.setAttribute('class', 'parent');
      // replacement.classList.add('highlight');
      replacement.textContent = selection.toString();
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(replacement);

      let popup = document.createElement('span');
      popup.addEventListener("click", this.annotationPopupEditor.bind(this, id));
      popup.setAttribute('class', 'click-to-annotate');
      let textNode = document.createTextNode("Start the Genius Annotation");
      popup.appendChild(textNode);

      // AFTER I SETUP THE HIDING OF THE RIGHT COLUMN ELEMENTS ON CLICK 
      //I'M GOING TO PUT THE 'textNode' IN THE RIGHT COLUMN
      let y = window.scrollY + replacement.getBoundingClientRect().top;
      popup.style.marginTop = `${y-380}px`;
      let right = document.getElementsByClassName('track-show-body-right');
      $(right).append($(popup));
    }

 }
   deleteHighlighted(id){
     let parent = document.getElementsByClassName('theBody')[0];
     let count = parent.children.length;
     const oldChild = document.getElementById(id);
     const replacement = document.createTextNode(oldChild.textContent);
     
     // Replace existing node sp2 with the new span element sp1
     parent.replaceChild(replacement, oldChild);

     // DELETES THE FORM OFF OF THE PAGE
     this.deleteAPopupEditor();

     // toggles the boolean so it will be ready to allow 
     //the next form that pops up
     this.toggle = !this.toggle;
  }   

 

  hider(e){
    this.setState({formType: "", current_anno: ""});
    const oldForm = document.getElementsByClassName('hidden')[0];
    const textarea = document.getElementById('editor')
    const img = document.getElementsByClassName('logo')[0];
    const anno = document.getElementsByClassName('annotation')[0];
    const innerForm = document.getElementById('editor-form')
    const tools = document.getElementsByClassName('tools')[0];
    const toolsTitle = document.getElementsByClassName('tools-title')[0];
    const toolsContent = document.getElementsByClassName('tools-content')[0];
    const toolsOptions = document.getElementsByClassName('tools-options')[0];
    const toolsContent2one = document.getElementsByClassName('tools-content2')[0];
    const toolsContent2two = document.getElementsByClassName('tools-content2')[1];
    const toolsContent2three = document.getElementsByClassName('tools-content2')[2];
    const annoSave = document.getElementsByClassName('annotation-save')[0];
    const annoCancel = document.getElementsByClassName('annotation-cancel')[0];
    const formDivOuter = document.getElementsByClassName('form-div-outer')[0];
    const buttonDiv = document.getElementsByClassName('button-div')[0];
    const hr = document.getElementsByClassName('hr')[0];


    if (e.target === oldForm || e.target === textarea
        || e.target === img || e.target === anno || e.target === innerForm
        || e.target === tools || e.target === toolsTitle
        || e.target === toolsContent || e.target === toolsOptions
        || e.target === toolsContent2one || e.target === toolsContent2two
        || e.target === annoSave || e.target === annoCancel
        || e.target === formDivOuter || e.target === buttonDiv
        || e.target === hr || e.target === toolsContent2three) {
       return;
    }
     

    const oldPopup = document.getElementsByClassName('click-to-annotate')[0];
    if (oldPopup) {
      oldPopup.remove();
      console.log('popup being deleted')
    }
    
    
    if (oldForm && !this.toggle) {
      oldForm.remove();
      
    }
    this.toggle = !this.toggle;

  }

  // hider2(){

  //   // UNFINISHED DO EXPECT THIS TO WORK IT'S JUST SOME GETTING STARTED

  //   let popup1 = document.getElementsByClassName('click-to-annotate')[0];
  //   let popup2 = document.getElementsByClassName('hidden')[0];
  //   let popup3 = document.getElementsByClassName('hidden2')[0];


  //   // popup1.classList.remove("invisible");
  //   if (popup2){
  //     popup2.classList.remove("invisible");
  //   }
  //   // popup3.classList.remove("invisible");
  // }

  annotationPopupEditor(id){
    //ADDS HIGHLIGHTING TO THE NEWLY CREATED LYRIC SPAN
    debugger
    document.getElementById(id).classList.add('highlight');
    let body = document.getElementsByClassName("theBody")[0].innerHTML;
    this.props.updateTrack({
      body: body,
      id: this.props.track.id
    });
    let popupEditor = document.createElement('div');
    popupEditor.classList.add('hidden');
    let img = document.createElement('img');
    img.setAttribute('src', window.annotation_arrow);
    img.classList.add('logo');
    popupEditor.appendChild(img);
    let divAnnotation = document.createElement('div');
    divAnnotation.classList.add('annotation');
    let form = document.createElement('form');
    form.setAttribute('id', 'editor-form')
    let formDivOuter = document.createElement('div');
    formDivOuter.classList.add('form-div-outer');
    let textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'editor');
    textarea.setAttribute('placeholder', "Don't just put the lyric in your own words-drop some knowledge!");
    // textarea.addEventListener("change", this.update("body"));
    // $(textarea).unbind('focusout');
    formDivOuter.appendChild(textarea);
    let toolsDiv = document.createElement('div');
    toolsDiv.classList.add('tools');
    let toolsTitle = document.createElement('div');
    toolsTitle.classList.add('tools-title');
    let toolsSpan = document.createElement('span');
    toolsSpan.classList.add('tools-content');
    let textNode = document.createTextNode("Tools:");
    toolsSpan.appendChild(textNode);
    toolsTitle.appendChild(toolsSpan);
    toolsDiv.appendChild(toolsTitle);
    let toolsOptions = document.createElement('div');
    toolsOptions.classList.add('tools-options');
    let optionsSpan = document.createElement('span');
    optionsSpan.classList.add('tools-content2');
    let textNode2 = document.createTextNode("Add Image");
    optionsSpan.appendChild(textNode2);
    toolsOptions.appendChild(optionsSpan);
    let optionsSpan2 = document.createElement('span');
    optionsSpan2.classList.add('tools-content2');
    let textNode3 = document.createTextNode("Formatting Help");
    optionsSpan2.appendChild(textNode3);
    toolsOptions.appendChild(optionsSpan2);
    let optionsAnchor = document.createElement('a');
    optionsAnchor.classList.add('tools-content2');
    let textNode4 = document.createTextNode("How To Annotate");
    optionsAnchor.appendChild(textNode4);
    toolsOptions.appendChild(optionsAnchor);
    toolsDiv.appendChild(toolsOptions);
    formDivOuter.appendChild(toolsDiv);
    let hr = document.createElement('hr');
    hr.classList.add('hr')
    formDivOuter.appendChild(hr);
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');
    let button1 = document.createElement('button')
    button1.classList.add("annotation-save");
    let textNode5 = document.createTextNode("Save");
    button1.appendChild(textNode5);
    button1.setAttribute("data-anno-id", id)
    button1.addEventListener("click", this.onSave.bind(this));
    //SAVE BUTTON ABILITY TO CREATE ANNOTATION IN DATABASE
    buttonDiv.appendChild(button1)
    let button2 = document.createElement('button');
    button2.classList.add("annotation-cancel");
    //GIVES CANCEL BUTTON ABILITY TO DELETE LATEST CREATED LYRIC SPAN
    button2.addEventListener("click", this.deleteHighlighted.bind(this, id));
    let textNode6 = document.createTextNode("Cancel");
    button2.appendChild(textNode6);
    buttonDiv.appendChild(button2);
    formDivOuter.appendChild(buttonDiv);
    form.appendChild(formDivOuter);
    divAnnotation.appendChild(form);
    popupEditor.appendChild(divAnnotation);
    
    // let popupEditor = (  
    //   <div className="hidden">
    //     <img className="logo" src={window.annotation_arrow} />
    //     <div className="annotation">
    //       <form>
    //         <div>
    //           <textarea id="editor"
    //             placeholder="Don’t just put the lyric in your own
    //             words—drop some knowledge!"></textarea>
    //           <div className="tools">
    //             <div className="tools-title">
    //               <span className="tools-content">Tools:</span>
    //             </div>
    //             <div className="tools-options">
    //               <span className="tools-content2">Add Image</span>
    //               <span className="tools-content2">Formatting Help</span>
    //               <a className="tools-content2">How To Annotate</a>
    //             </div>
                
    //           </div>
    //           <hr></hr>
    //           <div>
    //             <button className="annotation-save">Save</button>
    //             <button className="annotation-cancel">Cancel</button>
    //           </div>
    //           {/* <div id="preview"></div> */}
                  
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // )

    // TRYING TO MAKE FORM DISSAPPEAR IN NOT THE FOCUSED ELEMENT
    // let focusForm = document.getElementById('editor-form')
    // focusForm.addEventListener('focusout', this.deleteAPopupEditor.bind(this));
    // popupEditor.addEventListener('focusout', this.deleteAPopupEditor.bind(this));

    //FINAL STEPS OF FUNCTION:  ADDING THE ELEMENT TO THE PAGE
    let ele = document.getElementsByClassName('track-show-body-right')[0];
    ele.appendChild(popupEditor);
    // document.getElementById('editor-form').focus();
    // focusForm.focus();  
  }

  deleteAPopupEditor(){
    let parent = document.getElementsByClassName('track-show-body-right')[0];
    let child = document.getElementsByClassName('hidden')[0];
    parent.removeChild(child);
    // this.deleteHighlighted();
  }

  getAnno(e){
    
    e.preventDefault();
    if (e.target.id === "theBody" || e.target.id === "") {
      return
    } else {
      this.setState({formType: "displayAnno", current_anno: e.target.id});
    }
    
  }

  showAnno(){
    
   
    let anno = this.props.annotations[this.state.current_anno];
    if (anno) {
      anno = anno.body;
    } else {
      return;
    }

    return (<div className="hidden">
      <div className="title-and-contributors">
        <span>Genius Annotation</span>
        <span>1 Contributor</span>
      </div>
      <div className="annotation">
        <form>
          <div>
            <p readOnly id="display-anno">
              {marked(anno)}
            </p>
            <div className="tools">
              <div className="tools-title">
                <span className="tools-content">Tools:</span>
              </div>
              <div className="tools-options">
                <span className="tools-content2">Add Image</span>
                <span className="tools-content2">Formatting Help</span>
                <a className="tools-content2">How To Annotate</a>
              </div>

            </div>
            <hr></hr>
            <div>
              <button className="annotation-save">Save</button>
              <button className="annotation-cancel">Cancel</button>
            </div>
            {/* <div id="preview"></div> */}

          </div>
        </form>
      </div>
    </div>
    )
  }

  annotationPopupOnClick(){

  }

  initializeEditor(){
      var $editor = $('#editor');
      var $preview = $('#preview');
      setInterval(function () {
        $preview.html(marked($editor[0].value));
      }, 1000);
  }
 
  showEdit(e){
    debugger
    e.preventDefault();
    if (this.state.editForm === false) {
      this.setState({editForm: true});
    } else {
      this.setState({editForm: false});
    }
    
  }

  renderEditBody(){
    debugger
      const htmlLyrics = `<span>${this.props.track.body}</span>`;
      
      let ele = document.createElement('div');
      ele.innerHTML = htmlLyrics;
      let value= ele.textContent;
    
    return(
      <div contentEditable="true" id="theBody" defaultValue={value}></div>
    )
  }

  renderLyricBody(){
    return(
      <p id="theBody"
        onMouseUp={this.highlighter.bind(this)}
        onClick={this.getAnno.bind(this)}
      ></p>
    )
  }

  

  render(){
    debugger
    let formOutput;
   
    if (this.state.formType === "displayAnno") {
      formOutput = this.showAnno();
    }

    let editBody;
    if (this.state.editForm) {
      editBody = this.renderEditBody();
    } else {
      editBody = this.renderLyricBody();
    }


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
           <div className="track-show-header fade-in" onClick={this.hider.bind(this)}>
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
             <div className="track-show-body-right" onClick={this.hider.bind(this)}>
                {formOutput}

                
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