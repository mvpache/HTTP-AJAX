import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Col, Row } from 'reactstrap';

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      });
  }

  render() {
    return(
      <div>
        <Row>
          {this.state.friends.map(friend => {
            return (
              <Col xs="6">
                <Card body key={friend.id}>
                  <CardTitle>{friend.name}</CardTitle>
                  <CardText>{friend.age}</CardText>
                  <CardText>{friend.email}</CardText>
                  <Button>Delete</Button>
                </Card>
              </Col>
          );
        })}
          <Link to={`/addfriend`}><Button className="addAFriend" color="Primary">Add a Friend</Button></Link>
        </Row>
      </div>
    );
  }

}

export default FriendsList;