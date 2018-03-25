import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class AddFriend extends Component {
  constructor() {
    super();
    this.state = {
      newName: '',
      age: '',
      email: ''
    };
  }

  handleInput = (event) => {
    const newFriend = this.state

    newFriend[event.target.name] = event.target.value;

    this.setState({ newFriend });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const newFriend = {
      name: this.state.newName,
      age: this.state.age,
      email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({
          name: '',
          age: '',
          email: ''
        });
      })
  };

  render() {
    return (
      <div className="formContainer">
        <Link to={`/`}>See The List</Link>
        <Form onSubmit={this.handleSubmit} >
          <Input type="text" name="newName" onChange={this.handleInput} placeholder="New Friend's Name..." value={this.state.newName} />
          <Input type="text" name="age" onChange={this.handleInput} placeholder="New Friend's Age..." value={this.state.age} />
          <Input type="text" name="email" onChange={this.handleInput} placeholder="New Friend's Email..." value={this.state.email} />
          <Button>Add Friend</Button>
        </Form>
      </div>
    );
  }
}

export default AddFriend;