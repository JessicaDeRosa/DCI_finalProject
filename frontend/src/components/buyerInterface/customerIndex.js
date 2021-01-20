import React, { Component } from 'react';
import { ListGroup,Jumbotron,Card } from 'react-bootstrap';

class CustomerContainer extends Component {
    render() {
        return (
            <>
            <h1>customer</h1>
            <Jumbotron className="mt-3 p-0 row">
            <Card style={{ width: '18rem' }}>
              <ListGroup variant="flush">
              <ListGroup.Item variant="danger">Wine costumer</ListGroup.Item>
                <ListGroup.Item> National wine </ListGroup.Item>
                <ListGroup.Item> International wine </ListGroup.Item>
                <ListGroup.Item> Montly wine somelier box</ListGroup.Item>
                <ListGroup.Item> Merchandisign </ListGroup.Item>
                <ListGroup.Item> Blog</ListGroup.Item>
              </ListGroup>
            </Card>  
            <h1>customer</h1>
            </Jumbotron>
            </>
        )

    }
}

export default (CustomerContainer)