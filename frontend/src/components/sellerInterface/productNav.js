import React, { Component } from 'react';
import { Navbar,Nav,Form, FormControl, Button } from 'react-bootstrap';

class ProductNav extends Component {

    render() {
        return (
            <>
                <Navbar
                id="prodNav" 
                bg="dark" 
                variant="dark">
                    <Navbar.Brand href="/">logo</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" 
                        placeholder="Search a product" 
                        className="mr-sm-2" />

                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>

            </>

        )

    }
}

export default (ProductNav)