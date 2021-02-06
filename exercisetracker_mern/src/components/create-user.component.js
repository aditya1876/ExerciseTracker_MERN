
import React, { Component } from 'react';
import axios from 'axios';


export default class CreateUser extends Component {

  constructor(props) {
    super(props);

    //bind the 'this' to the correct 'this'
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username:'',
    }
  }

  //below funcitons update the values of a perticual cell in db whenever user changes them in UI
  onChangeUsername(e){
    this.setState({
      username: e.target.value  //sets the value of 'username' to whatever is on the UI
    });
  }

  //handle the submit on the html form
  onSubmit(e){
    e.preventDefault(); //prevent the default action on submitting the form

    const user = {
      username: this.state.username,
    }

    console.log(user);  

    //send the data to backend/db
    axios.post('http://localhost:5000/users/add', user) //post the request to backend
      .then(res => console.log(res.data));  //log the output of post request to console

    //blankout the username once the data is sent to db so that the user can create another user.
    this.setState({
      username:'',
    })
  }

  render(){
    return(
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

/*
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
*/