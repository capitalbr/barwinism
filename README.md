# Cleanius

[See it live](https://barwinism.herokuapp.com/#/)

Cleanius, a Genius clone, allows users to provide annotations and 
interpretation of CLEAN song lyrics, news stories, sources, poetry, and documents.
I made the backend using Ruby on Rails and PostgreSQL, while JavaScript powered by 
React / Redux takes care of the frontend.

This project was designed and built in under two weeks.

![Splash Page](https://user-images.githubusercontent.com/48269593/63730122-81e81700-c82f-11e9-8a70-885ca7a6da87.png)


### Annotation Functionality

![Screen Shot 2019-07-05 at 12 28 19 PM](https://user-images.githubusercontent.com/48269593/60737480-8cb5b800-9f20-11e9-95e1-2403d35ccc72.png)


The main feature of the app is annotating sections of a lyric. Giving a user 
the ability to create an annotation is simple enough, but the annotation
must be tied to a specific section of the lyric both visually and via a link
and it must persist beyond a refresh even though all the backend stores is a
string. Because of this it is necessary to auto-generate DOM elements in the 
tracks body that must be converted to and back from a string as they travel
back and forth between the front end and the database.

This was accomplished first by capturing highlighted text in a function called 
by an event listener on the parent element of the lyric and hiding elements
in the adjacent element to provide room for a popup for the user to click if 
they want to proceed with the annotation.

The called function then, among other things, had to auto-generate a DOM element
that replaced the highlighted selection with the text of the selection injected 
into it.  

```javascript
let id;
if (selection.rangeCount && selection.toString().length > 0) {
  const replacement = document.createElement('span');
  // more code...

  // then
  replacement.textContent = selection.toString();
  const range = selection.getRangeAt(0);
  range.deleteContents();
  range.insertNode(replacement);
  // more code...
    }
```

Plus it had to give each one a unique id as well as another temporary identifier
for garbage collection if it wasn't saved.

It also auto-generates another DOM element in the parent element adjacent to 
the lyric that must pop up right next to the selection.

```javascript
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

// ADD POPUP TO ADJACENT ELEMENT AND IT WILL NOW SHOW UP DIRECTLY BESIDE
// THE ANNOTATION
let right = document.getElementsByClassName('track-show-body-right');
$(right).append($(popup));
```

Once the adjacent element is clicked a css class must be auto generated to highlight the
lyric while another class is removed so the element will no longer be deleted
during a garbage collection cycle.

Upon clicking save the annotation must be persisted to the database
where it will be stored as a string, and reconverted back to html upon retrieval.  

```javascript
onSave(e){
  e.preventDefault();
  
  document.getElementsByClassName('youTube')[0].classList.remove('display-none');
  
  this.deleteSelected();
  
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
  
  let annoEditor = document.getElementsByClassName('hidden')[0];
  annoEditor.remove();
}
```


### Track Creation

The 'add song' page handles the creation of multiple database entries including the track itself, the artist, and any albums mentioned, as well as any relationships between those entries. Just like on genius.com the album input boxes are auto-generated depending on how many the user needs (they must really like auto-generation!). Users can also optionally provide a YouTube url that will be converted into it's embed url before being stored in the database. 

![add_song_page](https://user-images.githubusercontent.com/48269593/63220500-8422e500-c14e-11e9-8f27-1fb603fc074a.png)

### Technologies used
 *	JavaScript / Node
 *	Ruby on Rails
 *	PostgreSQL
 *  Microsoft Azure
 *  Webpack
 *  Babel
 *	Sass

### Libraries used:

* React
* Redux
* Material-UI
* jQuery (for AJAX)
* Bcrypt for user authorization
* Marked (A markdown parser and compiler. Built for speed)

### Features:

* Sign up & log in with username & password
* Auth and Protected Routes
* Annotate highlighted selections as seen on Genius.com
* Microsoft Azure's Bing News Search API to recreate Genius.com's News feature.
* Create new tracks, albums, and artists.
* Embedded youtube video for provided link.
* Markdown editor to add pictures, links, & more to annotations.
* Navigate to each track via the Charts page (index).
* Edit lyrics and lyric annotations.

### Upcoming Features:

* Edit track transcriptions and annotations.
* User profile, album, and artist pages.
* Comments section of track page.
* Upvotes on annotations and comments.
* Tags
* List of user contributions shown on profile page.
* Latest contribution page showcasing recent user contributions.
