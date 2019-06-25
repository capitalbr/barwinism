import React from 'react'

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
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

  render(){
    let message;
    let otherFormType;
    if (this.props.formType === "login"){
      message = "Please Login!";
      otherFormType = "Signup";
    } else {
      message = "Please Signup!";
      otherFormType = "Login"
    }
    return(
      <div>
        <h1>{message}</h1>
        <br/>
        <h2>To {otherFormType} {this.props.link}</h2>
          
        <br/>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input onChange={this.update("username")} type="text" value={this.state.username}/>
          </label>

          <label>
            Email
            <input onChange={this.update("email")} type="text" value={this.state.email} />
          </label>

          <label>
            Password
            <input onChange={this.update("password")} type="password" value={this.state.password}/>
          </label>


          <button>Submit</button>
        </form>
      </div>
    )
  }  
}

export default SessionForm;