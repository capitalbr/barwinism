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
    // this.formToggle = undefined;
    // this.formPaddingState = "padding-active";
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
      // debugger
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
      // <button onClick={this.toggle.bind(this)}>Sign up with email</button>
      // <button onClick={this.toggle.bind(this)}>Sign up with email <i className="material-icons">email</i></button>
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
              <p>Sign up with Facebook</p>
            </div>
          </button>

          <button className="button-signup twitter" onClick={this.guestUser.bind(this)}>
            <div>
              <i className="material-icons">email</i>
              <p>Sign up with Twitter</p>
            </div>
          </button>

          <button className="button-signup google" onClick={this.guestUser.bind(this)}>
            <div>
              <i className="material-icons">email</i>
              <p>Sign up with Google</p>
            </div>
          </button>
        </div>

        <form onSubmit={this.handleSubmit}>
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
    // debugger
    e.preventDefault();
    // if (!this.formToggle) {
    //   this.formToggle = this.renderSignup();
    // } else {
    //   this.formToggle = undefined;
    // }
    // // this.setState({ field: this.state.field })
    // // this.formPadding();
    // this.forceUpdate();
    const newValue = !this.state.showForm;
    this.setState({showForm: newValue});
  }

  // formPadding(){
  //   if (!this.formPaddingState){
  //     if (this.state.field === "" && this.state.email === ""  && this.state.username === "" && this.state.password === "") {
  //     this.formPaddingState = "padding-active";
  //     }
  //   } else {
  //       this.formPaddingState = "";
  //     }
  // }



  render(){
    let message;
    let message2;
    let formType;
    let formToggle;
    if (this.props.formType === "login"){
      message = "Sign In";
      formType = null;
      formToggle = this.renderLogin();
      // this.formPadding();
    } else {
      message2 = <div className="message-2">Sign  Up 
          <p>and evolve the meaning behind the lyrics</p>
        </div>;
      formType = this.buttonSignup.bind(this)();
    }
    if (this.state.showForm === true) {
      formToggle = this.renderSignup();
    }          
//  debugger
    return(

      <div className="auth-parent">
        <h1 className="one">{message}</h1>
        <h1 className="two">{message2}</h1>

        <div className="toggle-button">{formType}</div>
       
        {/* <form className={this.formPaddingState}> */}
        

          <div>  
           {formToggle}
          </div>
        
        <div className="errors">{this.renderErrors()}</div>
      </div>
    )
  }  
}

export default SessionForm;