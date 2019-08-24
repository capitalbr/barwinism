import React from 'react';

annotationPopupEditor(id){
  let anno = document.getElementById(id);
  let y = window.scrollY + anno.getBoundingClientRect().top;
  let val = y - 565;
  if ((y - 565) < 0) {
    val = 0;
  }
  return(
    <div 
      className="hidden"
      style={{
        marginTop: `${val}px`
      }}>
      <img src={window.annotation_arrow} className="logo"></img>
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
                  data-anno-id={id}
                  onClick={this.onSave.bind(this)}>
                  Save
                </button>
                <button 
                  className="annotation-cancel"
                  onClick={this.deleteHighlighted.bind(this, id)}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
    </div>
  )

}