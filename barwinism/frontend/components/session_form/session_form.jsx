import React from 'react'

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      field: "",
      email: "",
      username: "",
      password: "",
      showForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }
  
  renderErrors() {
    if (this.props.errors.length < 1) {
      return;
    }
    return (
      <div>
        <span>Whoops</span>
        <ul>
          <h5>There must be some mistake</h5>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  update(field){
    return (e) => {
      e.preventDefault();
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
      <form onSubmit={this.handleSubmit}>
        <div className="errors">{this.renderErrors()}</div>
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

          <div className="button">
            <button onClick={this.handleSubmit} >SUBMIT</button>
            <button onClick={this.guestUser.bind(this)}>GUEST LOGIN</button>
          </div>

        </div>
      </form>
      )
  }

 
  buttonSignup(){
    return (
      <div>
        <button className="button-signup fb" onClick={this.toggle.bind(this)}>
          <div>
            <i className="material-icons">email</i>
            <p>Sign up with Facebook</p>
          </div> 
        </button>

        <button className="button-signup twitter" onClick={this.toggle.bind(this)}>
          <div>
            <i className="material-icons">email</i>
            <p>Sign up with Twitter</p>
          </div>
        </button>

        <button className="button-signup google" onClick={this.toggle.bind(this)}>
          <div>
            <i className="material-icons">email</i>
            <p>Sign up with Google</p>
          </div>
        </button>

        <button className="button-signup" onClick={this.toggle.bind(this)}>
          <div>
            <i className="material-icons">email</i>
            <p>Sign up with email</p>
          </div>
        </button>
      </div>
   


    )
  }
  
  

  renderLogin(){
    return(
      <div>
        <div className="toggle-button toggle-2">
          <button className="button-signup fb" onClick={this.guestUser.bind(this)}>
            <div>
              <i className="material-icons">email</i>
              <p>Sign in with Facebook</p>
            </div>
          </button>

          <button className="button-signup twitter" onClick={this.guestUser.bind(this)}>
            <div>
              <i className="material-icons">email</i>
              <p>Sign in with Twitter</p>
            </div>
          </button>

          <button className="button-signup google" onClick={this.guestUser.bind(this)}>
            <div>
              <i className="material-icons">email</i>
              <p>GUEST LOGIN</p>
            </div>
          </button>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="errors">{this.renderErrors()}</div>
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
            <div className="button">
              <button onClick={this.handleSubmit} >SUBMIT</button>
              <button onClick={this.guestUser.bind(this)}>GUEST LOGIN</button>
            </div>
          </div>
        </form>
      </div>
      
    )
  }

  toggle(e){
    e.preventDefault();
    this.props.clearErrors()
    const newValue = !this.state.showForm;
    this.setState({showForm: newValue});
  }

  render(){
    let message;
    let message2;
    let formType;
    let formToggle;
    if (this.props.formType === "login"){
      message = "Sign In";
      formType = null;
      formToggle = this.renderLogin();
    } else {
      message2 = <div className="message-2">Sign  Up 
          <p>and evolve the meaning behind the lyrics</p>
        </div>;
      formType = this.buttonSignup.bind(this)();
    }
    if (this.state.showForm === true) {
      formToggle = this.renderSignup();
    }          
    return(

      <div className="auth-parent">
        <h1 className="one">{message}</h1>
        <h1 className="two">{message2}</h1>

        <div className="toggle-button">{formType}</div>               
          <div>  
            {formToggle}
          </div>        
      </div>
    )
  }  
}

export default SessionForm;