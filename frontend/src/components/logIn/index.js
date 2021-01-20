import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Form, Button, Col, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LocalBarIcon from '@material-ui/icons/LocalBar';

class LogForm extends Component {
    constructor(props){
        super(props)
       this.formData = React.createRef(); 
       this.state={
           role:''
       } 
    }
   

    logUser = (event) => {
        event.preventDefault();
        const formData = this.formData.current;
        let userLogIn = {
            password: formData.password.value,
            email: formData.email.value,
           
        }
        console.log(userLogIn)
        axios.post('/users/logIn', userLogIn)
            .then((result) => {
                console.log (result.data)
                toast.success("loged in !", { position: toast.POSITION.TOP_CENTER })
                this.setState({
                    role: result.data.role
                })
            })
            .then(() =>{
                console.log(this.state.role)
                if(this.state.role==="seller") {
                    setTimeout(()=>{window.location.href='/sellerProfil'},3000)
                   
                }
                else if(this.state.role==="customer") {
                    setTimeout(()=>{window.location.href='/customerProfil'},3000)
                  
                }
                else  {
                    console.log('no role found')
                }
                
            })
     
            
            




    }

    render() {
        console.log(this.state.role)
        return (

            <>
                <ToastContainer />
                <Jumbotron className="container col-md-6 mt-3 p-0">
                    <Form onSubmit={this.logUser} ref={this.formData}>
                        <ListGroup.Item variant="secondary"
                            className="m-1 d-flex justify-content-center">
                            <h1>
                                <AccessibilityNewIcon />
                                Log in !
                                <AccessibilityNewIcon />
                            </h1>
                        </ListGroup.Item>

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
                        <Button variant="primary"
                            type="submit"
                            className="col-md-12 mb-3">
                            <LocalBarIcon />
                            Log in!
                            <LocalBarIcon />
                        </Button>
                    </Form>
                </Jumbotron>
            </>
        )

    }
}

export default (LogForm)