import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props)
    this.state = {query: ""}
  }

  
  update(e){
    e.preventDefault();
    this.setState({query: e.target.value});
  }
      
  handleSubmit(e){
    e.preventDefault()
  }

  renderNav(linksType){
    let links;
    if (linksType === "auth") {
      links = this.renderAuthLinks();
    } else {
      links = this.renderLogoutLinks();
    }
    return( 
      <nav>
        <div className="header-container">
          <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.update.bind(this)} type="text" value={this.state.query}
              placeholder="Search lyrics & more"
            />
          </form>
          <Link className="logo-link" to="/"><img className="logo" src={window.logo} /></Link>
          {links}
        </div>
        <div className="header-container-bottom">
          <div><ul><li><Link className="header-bottom" onClick={this.props.clearErrors} to="/add-song">ADD A SONG</Link></li></ul></div>
        </div>
      </nav>
    )
  }

  renderAuthLinks(){
    return(
      <div className="session-links-container">
        <Link className="header-top" onClick={this.props.clearErrors} to="/login">SIGN IN</Link>
        <Link className="header-top" onClick={this.props.clearErrors} to="/signup">SIGN UP</Link>
      </div>
    )
  }

  renderLogoutLinks(){
    return(
      <div className="session-links-container">
        <Link className="logout header-top invisible" to="#">LOG OUT</Link>
        <Link className="logout header-top" to="#" onClick={this.props.logout.bind(this)} >LOG OUT</Link>
      </div>
    )
  }

  render(){
    let navBar;

    if (this.props.currentUser) {
      navBar = this.renderNav("logout");
    } else {
      navBar = this.renderNav("auth")
    }
    
    return(
      <header>
        <div className="h-top">
          <div className="h-top2">  
            {navBar}
          </div>
        </div>
      </header> 
    )
  }
  
}

export default Greeting;