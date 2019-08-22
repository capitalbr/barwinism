import React from 'react'
import { Link } from "react-router-dom";
import ChartsContainer from "../tracks/charts_container"
import { fetchNews } from '../../actions/splash_actions';

export default class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNews()
  }

  componentDidUpdate() {
 
  }

  render() {
    let news, mainStory, otherStories, storyClass, contributionMain,
      contributionOther;
   
    if (this.props.news && this.props.news[0]) {
      news = this.props.news[0].slice(0, 5).map((story, idx) => {
          storyClass = "";
        if (idx === 4) {
          storyClass = "no-border";
        }
        if (idx === 0) {
          contributionMain = <div className="contributor">
            by {story.provider[0].name} / <span>{story.datePublished.slice(0, 10)}</span></div>;
          
          contributionOther = "";
        } else {
          contributionOther = <div className="contributor">
            by {story.provider[0].name} / <span>{story.datePublished.slice(0, 10)}</span></div>;

          contributionMain = "";
        }
        return <li key={`${story.name}${idx+1}`}className={storyClass}>
          <div>
            <div className="section-title"><div>News</div><hr/></div>
            <div className="story-title">{story.name}</div>
            <div className="story-description">{story.description.slice(0, 35) + "..."}</div>
            {contributionMain}
          </div>
          <div>
            {contributionOther}
            <img src={story.image.contentUrl}></img>
          </div>
        </li>
      })
      mainStory = news[0];
      otherStories = news.slice(1);
      
    } 
    
    

    return (
      <div className="splash">
       <div className="news"><ul>
         <div className="main-story">{mainStory}</div>
         <div className="other-stories">{otherStories}</div>
       </ul></div>
      <ChartsContainer/>
      </div>
    )
  }
}