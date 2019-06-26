import React from 'react'

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      field: "",
      email: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }
  
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  guestUser(e) {
    e.preventDefault();
    if (this.props.formType === 'login') {
      this.props.processForm({ field: 'testing', password: 'testing' });
    } else {
      this.props.guestLogin({ field: 'testing', password: 'testing' });
    }
    
  }


  renderSignup(){
    return(
      <div>
        <label>
          USERNAME
          <br />
          <input onChange={this.update("username")} type="text" value={this.state.username} />
          <br />
        </label>

        <label>
          EMAIL
          <br />
          <input onChange={this.update("email")} type="text" value={this.state.email} />
          <br />
        </label>

        <label>
          PASSWORD
              <br />
          <input onChange={this.update("password")} type="password" value={this.state.password} />
          <br />
        </label>

      </div>
      )
  }

  buttonSignup(){
    return (
        <button onClick={this.renderSignup()}>Sign up with email</button>
    )
  }
  
  

  renderLogin(){
    return(
      <div>
        <label>
        USERNAME or EMAIL
              <br />
        <input onChange={this.update("field")} type="text" value={this.state.field} />
        <br />
      </label>

      <label>
        PASSWORD
              <br />
        <input onChange={this.update("password")} type="password" value={this.state.password} />
        <br />
      </label>
      </div>
      
    )
  }

  render(){
    let message;
    let formType;
    let otherFormType;
    if (this.props.formType === "login"){
      message = "L O G I N";
      otherFormType = "Signup";
      formType = this.renderLogin();
    } else {
      message = "S I G N  U P";
      otherFormType = "Login"
      formType = this.buttonSignup();
    }
              
  
    return(
      <div>
        <h1 className="form">{message}</h1>
        
        
        
        <form onSubmit={this.handleSubmit}>

          <div>
            {formType}

            

            <div className="button">
              <button>SUBMIT</button>
              <button onClick={this.guestUser.bind(this)}>GUEST LOGIN</button>
            </div>
          </div>
        </form>
        <div className="errors">{this.renderErrors()}</div>
      </div>
    )
  }  
}

export default SessionForm;