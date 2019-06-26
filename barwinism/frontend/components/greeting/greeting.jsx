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
  }


  
      

  render(){
    let navBar;
    if (this.props.currentUser) {
      navBar = () => (<div className="header-container">
          <h1>BARWINISM</h1>
          {/* <h1>Hello {this.props.currentUser.username}! </h1> */}
          <div className="session-links-container">
            <Link onClick={this.props.logout.bind(this)} >LOG OUT</Link>
          </div> 
        </div>)
      } else {
        navBar = () => (<div className="header-container">
              <h1>BARWINISM</h1>
              <div className="session-links-container">
                <Link className="border" to="/login">SIGN IN</Link>
                <Link to="/signup">SIGN UP</Link>
              </div>
              
              
          </div>)
      }
    return(
      <header>
        <div className="h-top">
          <div className="h-top2">
            <nav>
              {navBar()}
            </nav>
          </div>
        </div>
      </header>
      
    )
  }
  
}

export default Greeting;