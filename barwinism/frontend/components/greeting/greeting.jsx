import React from 'react';
import { Link } from 'react-router-dom';



// const Greeting = (props) => {
//   if (props.currentUser) {
//     return <div>
//       <h1>Hello {props.currentUser.username}! </h1>
//       <button onClick={props.logout} >Log Out</button>
//     </div>
//   } else {
//     return <nav>
//       <Link className="border" to="/login">SIGN IN</Link>
//       <Link to="/signup">SIGN UP</Link>
//       <h1>BARWINISM</h1>
//     </nav>
//   }
// }

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
    // need to make a search component, backend routes and tables that search needs
    // need to make sure search component has the slices of state it needs
    // need accesss to thunk/action creator in this file, use here in handleSubmit to update the store and then
    // push to search route to view the results
    // slice of state for tracks, (artists and albums if time)
    // charts will use same slice of state as search
    // state will be reset each time unless user clicks load more
  }

  render(){
    let navBar;
    if (this.props.currentUser) {
      navBar = () => (<div className="header-container">
          <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.update.bind(this)} type="text" value={this.state.query}
              placeholder="Search lyrics & more"
            />
          </form>
          <Link className="logo-link" to="/"><img className="logo" src={window.logo} /></Link>
          {/* <h1>Hello {this.props.currentUser.username}! </h1> */}
          <div className="session-links-container">
            <Link className="logout header-top invisible">LOG OUT</Link>
            <Link className="logout header-top" onClick={this.props.logout.bind(this)} >LOG OUT</Link>
          </div> 
        </div>)
      } else {
        navBar = () => (<div className="header-container">
          <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.update.bind(this)} type="text" value={this.state.query}
              placeholder="Search lyrics & more"
            />
          </form>
          <Link className="logo-link" to="/"><img className="logo" src={window.logo} /></Link>
              <div className="session-links-container">
                <Link className="header-top" onClick={this.props.clearErrors} to="/login">SIGN IN</Link>
                <Link className="header-top" onClick={this.props.clearErrors} to="/signup">SIGN UP</Link>
              </div>
              
              
          </div>)
      }

    let navBarBottom;
    if (this.props.currentUser) {
      navBarBottom = () => (<div className="header-container-bottom">
        <div><ul><li><Link className="header-bottom" onClick={this.props.clearErrors} to="/add-song">ADD A SONG</Link></li></ul></div>
      </div>)
    } else {
      navBarBottom = () => (<div className="header-container-bottom">

        <div><ul><li><Link className="header-bottom" onClick={this.props.clearErrors} to="/signup">ADD A SONG</Link></li></ul></div>
      </div>)
    }

    return(
      <header>
        <div className="h-top">
          <div className="h-top2">
            <nav>
              {navBar()}
              {navBarBottom()}
            </nav>
          </div>
        </div>
      </header>
      
    )
  }
  
}

export default Greeting;