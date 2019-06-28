import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { query: "" }
  }




  render() {
  
    
    return (
      
        <div className="footer-top">
          <div>
            <a href="#">About Genius</a>
            <a href="#">Contributor Guidelines</a>
            <a href="#">Press</a>
            <a href="#">Advertise</a>
            <a href="#">Event Space</a>
          </div>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Delete Account</a>
            <a href="#">Licencing</a>
            <a href="#">Jobs</a>
            <a href="#">Developers</a>
            <a href="#">Terms of Use</a>
            <a href="#">Copyright Policy</a>
            <a href="#">Contact Us</a>
            <a href="#">Sign Out</a>
          </div>
          <div>© 2019 Barwinism Media Group Inc.</div>
        </div>
       
    

    )
  }

}

export default Footer;