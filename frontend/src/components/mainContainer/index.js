import React, { Component } from 'react';
import Slideshow from './carousel';
import { ListGroup,Jumbotron,Card } from 'react-bootstrap';
import './style.css'

class MainContainer extends Component {
    render() {
        return (
            <>
            <Jumbotron 
            id="main-cont"
            className="mt-3 p-0 row">
            <Card style={{ width: '18rem' }}>
              <ListGroup variant="flush">
              <ListGroup.Item variant="danger">My Markets</ListGroup.Item>
                <ListGroup.Item> National wine </ListGroup.Item>
                <ListGroup.Item> International wine </ListGroup.Item>
                <ListGroup.Item> Montly wine somelier box</ListGroup.Item>
                <ListGroup.Item> Merchandisign </ListGroup.Item>
                <ListGroup.Item> Blog</ListGroup.Item>
              </ListGroup>
            </Card>
            <Slideshow/>
            </Jumbotron>
            </>
        )

    }
}

export default (MainContainer)