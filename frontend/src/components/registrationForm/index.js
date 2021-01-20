import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Form, Button, Col, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import './style.css';


class RegistrationForm extends Component {
    formData = React.createRef();
    addUser = (event) => {
        event.preventDefault();
        const formData = this.formData.current;
        let newUser = {
            userName: formData.userName.value,
            firstName: formData.firstName.value,
            lastName: formData.lastName.value,
            password: formData.password.value,
            email: formData.email.value,
            // country:formData.country.value,
            birthDate: formData.birthDate.value,
            gender: formData.gender.value,
            role: formData.role.value,
            street: formData.street.value,
            hous_no: formData.hous_no.value,
            zip: formData.zip.value,
            city: formData.zip.value
        }
        console.log(newUser)
        axios.post('/users/signup', newUser)
        .then( () => toast.success("register! wellcome to winatics !",
         {position : toast.POSITION.TOP_CENTER}) ) 
        .then(()=>{
            setTimeout(()=>{window.location.href='/'},4000)
          }
            )

    }

    render() {
        return (

            <>
            <ToastContainer />
                <Jumbotron className="container col-md-6 mt-3 p-0">
                    <Form onSubmit={this.addUser} ref={this.formData}>
                        <ListGroup.Item variant="secondary"
                            className="m-1 d-flex justify-content-center">
                            <h1>
                                <AccessibilityNewIcon />
                                Join us!
                                <AccessibilityNewIcon />
                            </h1>
                        </ListGroup.Item>
                        <div className="m-3">
                            <Form.Group >
                                <Form.Label className="d-flex justify-content-center">
                                    User name
                                </Form.Label>
                                <Form.Control placeholder="Write your user name"
                                    name="userName" required />
                            </Form.Group>
                            <div>
                                <Form.Group
                                    className="row d-flex justify-content-center">
                                    <Form.Check
                                        name="role"
                                        type="radio"
                                        label="i want to buy"
                                        value="customer"
                                        className="col-md-4"
                                    />
                                    <Form.Check
                                        name="role"
                                        type="radio"
                                        label="i want to sell"
                                        value="seller"
                                        className="col-md-4"
                                    />

                                </Form.Group>
                            </div>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                        placeholder="Enter email"
                                        name="email" required
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        placeholder="Password"
                                        name="password" required
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="First Name"
                                        name="firstName" required
                                    />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName" required
                                    />
                                </Form.Group>
                            </Form.Row>
                            <div className="row row-col-md-4 ">
                                <div className="col d-flex justify-content-between">
                                    <Form.Group >
                                        <Form.Check
                                            name="gender"
                                            type="radio"
                                            label="Female"
                                            value="female"
                                        />
                                        <Form.Check
                                            name="gender"
                                            type="radio"
                                            label="Male"
                                            value="male"
                                        />
                                         <Form.Check
                                            name="gender"
                                            type="radio"
                                            label="diverse"
                                            value="diverse"
                                        />

                                    </Form.Group>
                                </div>
                                <Form.Group as={Col} className="col ml-4" >
                                    <Form.Label> Birth date</Form.Label>
                                    <Form.Control type="date" name="birthDate">
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="row row-md-4">
                                <Form.Label 
                                className="d-flex justify-content-center col-sm ">
                                    <h4>
                                        Address
                                </h4>
                                </Form.Label>
                                <Form.Row className="col-sm">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label> City </Form.Label>
                                        <Form.Control name="city" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label> Street </Form.Label>
                                        <Form.Control name="street" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label> Hause number </Form.Label>
                                        <Form.Control name="hous_no" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control name="zip" />
                                    </Form.Group>
                                </Form.Row>
                            </div>
                        </div>
                        <Button 
                            type="submit"
                            className="col-md-12 mb-3">
                            <LocalBarIcon/>
                            Join!
                            <LocalBarIcon/>
                         </Button>
                    </Form>
                </Jumbotron>
            </>
        )

    }
}

export default (RegistrationForm)