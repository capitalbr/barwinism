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
      editForm: false,
      lyrics: "",
      anno_body: ""
    };
    this.toggle = true;
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
    document.getElementById(id).classList.remove('delete-selected');
    document.getElementsByClassName('youTube')[0].classList.remove('display-none');

    e.preventDefault();
    this.deleteSelected();
    const annotation = {
      body: document.getElementsByTagName("textarea")[0].value,
      track_id: this.state.track_id,
      anno_id: e.target.getAttribute("data-anno-id"),
      upvotes: this.state.upvotes

    }
    this.props.createAnnotation(annotation);
    // let returnedAnno = this.props.createAnnotation(annotation).then(annotation => {
    //   return annotation
    // })
    
    let body = document.getElementsByClassName("theBody")[0].innerHTML;
    this.props.updateTrack({
      body: body,
      id: this.props.track.id
    });
    
    let annoEditor = document.getElementsByClassName('hidden')[0];
    annoEditor.remove();

    // debugger
    //testing
    // let biggest = 0;
    // this.props.annotations.forEach(el => {
    //   if (el.id > biggest) {
    //     biggest = el.id;
    //   }
    // })
    // this.state.formType = "displayAnno";
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
    
    // document.removeEventListener('mouseup', this.registerDelete.bind(this), true);

    
    const oldPopup = document.getElementsByClassName('click-to-annotate')[0];
    if (oldPopup) {
      oldPopup.remove();
    }
    const selection = window.getSelection();
    if (window.getSelection().toString().length > 0) {
      document.getElementsByClassName('youTube')[0].classList.add('display-none');
    }
    
    let id;
    if (selection.rangeCount && selection.toString().length > 0) {
      const replacement = document.createElement('span');
      // GIVING THE NEW SPAN A UNIQUE ID
      // let count = document.getElementsByClassName('theBody')[0].children.length;
      // let count = this.htmlLyrics.children.length;
      id = `${this.props.track.id}-${Math.random()}`;
      
      replacement.setAttribute('id', id);
      replacement.setAttribute('class', 'parent');

      replacement.setAttribute('class', 'delete-selected');
      // replacement.classList.add('highlight');
      console.log(`NEWLY CREATED SPAN: ${id}`);
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
      popup.style.height = 'fit-content';

      // let y = window.scrollY + selection.getBoundingClientRect().top;
      // popup.style.marginTop = `${y - 380}px`;



      let right = document.getElementsByClassName('track-show-body-right');
      $(right).append($(popup));
      // this.deleteHighlighted(id)    
     
      // this.registerOutsideClick();
      
    }

 }

registerDelete(e){
  
 
    var container = $(".track-show-body-right");
    
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {


      this.deleteSelected();


    }

}

registerOutsideClick(){
 
  document.addEventListener('mouseup', this.registerDelete.bind(this), true);
}


deleteHighlighted(id){
  document.getElementsByClassName('youTube')[0].classList.remove('display-none');
  let parent = document.getElementsByClassName('theBody')[0];

  const oldChild = document.getElementById(id);
  console.log(`parent:${parent}`);
  console.log(`oldChild:${oldChild}`);
  console.log(`id:${id}`);
  const replacement = document.createTextNode(oldChild.textContent);
  // Replace existing node sp2 with the new span element sp1
  parent.replaceChild(replacement, oldChild);

  // DELETES THE FORM OFF OF THE PAGE
  this.deleteAPopupEditor();

  

  // toggles the boolean so it will be ready to allow 
  //the next form that pops up
  this.toggle = !this.toggle;
  this.deleteSelected();
}   

  deleteSelected() {
    let parent = document.getElementsByClassName('theBody')[0];
    
    const oldChildren = $('.delete-selected');
    
    oldChildren.each((i, child) => {
      const replacement = document.createTextNode(child.textContent);
          // Replace existing node sp2 with the new span element sp1
      parent.replaceChild(replacement, child);

    })
    
    // let body = document.getElementsByClassName("theBody")[0].innerHTML;
    this.props.updateTrack({
      body: parent.innerHTML,
      id: this.state.track_id
    }).then(this.setState({lyrics: parent.innerHTML}))

  }   



 

  hider(e){
    if (!e.target.classList.contains('click-to-annotate') &&
      !e.target.parentElement.classList.contains('track-show-body-right') &&
      !e.target.parentElement.parentElement.classList.contains('track-show-body-right') &&
      !e.target.parentElement.parentElement.parentElement.classList.contains('track-show-body-right') &&
      !e.target.parentElement.parentElement.parentElement.parentElement.classList.contains('track-show-body-right') &&
      !e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains('track-show-body-right') &&
      !e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains('track-show-body-right') &&
      !e.target.classList.contains("tools-content2")
    ) {
      let temp = document.getElementsByClassName('youTube')[0];
      if ( temp ){
        document.getElementsByClassName('youTube')[0].classList.remove('display-none');
      }
    }
    

    this.setState({ formType: "", current_anno: "", lyrics: document.getElementsByClassName('theBody')[0].innerHTML });
    
  
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
    
    // debugger
    let val = e.target;
    if (oldForm && !this.toggle && !val.classList.contains('click-to-annotate')) {
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
    
    document.getElementById(id).classList.add('highlight');
    // document.getElementById(id).classList.remove('delete-selected');

    let body = document.getElementsByClassName("theBody")[0].innerHTML;
    // this.props.updateTrack({
    //   body: body,
    //   id: this.props.track.id
    // });
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
    let anno = document.getElementById(id);
    let y = window.scrollY + anno.getBoundingClientRect().top;
    let val = y - 565;
    if ((y - 565) < 0) {
      val = 0;
    }
    popupEditor.style.marginTop = `${val}px`;

    let ele = document.getElementsByClassName('track-show-body-right')[0];
    ele.appendChild(popupEditor);
    // document.getElementById('editor-form').focus();
    // focusForm.focus();  
    
    
  }

  deleteAPopupEditor(){
    let parent = document.getElementsByClassName('track-show-body-right')[0];
    let child = document.getElementsByClassName('hidden')[0];
    if (parent instanceof Node && child instanceof Node) {
      parent.removeChild(child);
    }
    
    // this.deleteHighlighted();
  }

  getAnno(e){
    // if (this.state.formType === "displayAnno") {
    //   this.setState({ formType: "", current_anno: "" });
    // }
    e.preventDefault();
    if (e.target.id === "theBody" || e.target.id === "") {
      return
    } else {
      this.hider(e);
      
      this.setState({ formType: "displayAnno" });
      this.setState({ current_anno: e.target.id });
      const current_annotation = this.props.annotations[e.target.id];
      let current_annotation_marked = $(marked(current_annotation.body));
      this.setState({
        anno_body: current_annotation_marked.html()
      })
   
    }
    console.log(this.state.anno_body);
    // debugger
  }

  showAnno(){
    
   
    // let anno = this.props.annotations[this.state.current_anno];
    // let annoBody;
    // if (anno) {
    //   // anno = anno.body;
    //   annoBody = anno.body;

    // } else {
    //   return;
    // }

    let annoMargin = document.getElementById(this.state.current_anno);
    let y = window.scrollY + annoMargin.getBoundingClientRect().top;
    let val = y - 565;
    if ((y - 565) < 0) {
      val = 0;
    }

    let styles = {
      marginTop: `${val}px`,
    };

    // let ele = document.getElementById('display-anno');
    // debugger
    // if (ele){
    //   ele.innerHTML = marked(annoBody);
    // }
    

    return (<div className="hidden2"
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
              {/* {marked(anno)} */}
              {/* {marked('[google](google.com)')} */}
              
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

  renderLyricBody(){
    return(
      <p id="theBody"
        onMouseUp={this.highlighter.bind(this)}
        onClick={this.getAnno.bind(this)}
      ></p>
    )
  }

  

  render(){
    
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