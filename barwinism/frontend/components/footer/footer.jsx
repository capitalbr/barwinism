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
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">About Genius</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Contributor Guidelines</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Press</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Advertise</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Event Space</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Privacy Policy</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Delete Account</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Licencing</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Jobs</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Developers</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Terms of Use</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Copyright Policy</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Contact Us</a>
          <a href="https://www.linkedin.com/in/bradley-b-53b118102/">Sign Out</a>
        </div>
        <div>© 2019 Cleanius Media Group Inc.</div>
      </div>
       
    )
  }

}

export default Footer;