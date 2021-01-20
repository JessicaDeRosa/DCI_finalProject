import React, { Component } from 'react';
import { Navbar,Nav,Form, FormControl, Button } from 'react-bootstrap';

class AppBar extends Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">logo</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/register">
                            Register
                            </Nav.Link>
                            <Nav.Link href="/logIn">
                             Log in
                            </Nav.Link>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>

            </>

        )

    }
}

export default (AppBar)