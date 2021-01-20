import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Jumbotron, Form, Button, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import './style.css';
import FileUpload from './fileUploader';

class ProductForm extends Component {
    state = {
        chessy: false,
        acid: false,
        fileName:'',
        files : []
    };

    pictureData = React.createRef();
    formData = React.createRef();
    addProduct = (event) => {
        event.preventDefault();
        let checkArray = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                checkArray.push(key);
            }
        }

        let checkData = {
            checkbox: checkArray.toString()
        };
        const formData = this.formData.current;
        let newProduct = {
            product_name: formData.product_name.value,
            price: formData.price.value,
            category: formData.category.value,
            description: formData.description.value,
            chessy: formData.chessy.value,
            acid: formData.acid.value,
            checkData: checkData


        }
        console.log(newProduct)
        axios.post('/products/add', newProduct)
            .then(() => toast.success(" Added !",
                { position: toast.POSITION.TOP_CENTER }))
    }
    onChangeChessy = () => {
        this.setState(initialState => ({
            chessy: !initialState.chessy,
        }));
    }
    onChangeAcid = () => {
        this.setState(initialState => ({
            acid: !initialState.acid,
        }));
    }

    fileSelectedHandler = event => {
        console.log(event.target.files);
        this.setState({
            fileName: event.target.files[0].name
        })
        console.log(this.state.fileName)
        
    }

    // fileUploadHandler = event => {
    //     event.preventDefault();
    //     const fd=  new FormData();
    //     fd.append('file',this.state.file,);
    //     console.log(fd)
    //     axios.post('/products/pictureAdd',
    //     fd,{
    //         headers:{
    //             'Content-Type': 'multipart/form-data'
    //         },
    //         onUploadProgress: ProgressEvent => {
    //         console.log ('upload progress' + 
    //        Math.round(ProgressEvent.loaded / ProgressEvent.total*100) + '%') 
    //     }
    // }
    //     )
    //         .then(() => toast.warning(" Product picture added !",
    //             { position: toast.POSITION.TOP_CENTER }))
    // }

    render() {

        return (

            <>
                <ToastContainer />
                <Jumbotron className="container col-md-6 mt-3 p-0">
                    <Fragment>
                        <ListGroup.Item variant="secondary"
                            className="m-1 d-flex justify-content-center">
                            <h1>
                                product Form
                            </h1>
                        </ListGroup.Item>
                        <FileUpload/>
                        {/* <Form.File
                            style={{ display: 'none' }}
                            ref={fileInput => this.fileInput = fileInput}
                            onChange={this.fileSelectedHandler}
                            name="productPicture"
                            label="product picture"
                            custom
                        />
                        <Button
                            onClick={() => this.fileInput.click()}
                        >
                            Pick a picture
                                </Button>
                        <Button
                            onClick={this.fileUploadHandler}
                            variant="primary"
                            type="submit"
                        >
                            Add picture
                        </Button> */}
                        {/* </Form> */}
                        <Form onSubmit={this.addProduct} ref={this.formData}>
                            <Form.Row>
                                <Form.Group className="col-md-6" controlId="formGridEmail">
                                    <Form.Label> Product Name </Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Add your product"
                                        name="product_name" required
                                    />
                                </Form.Group>
                                <Form.Group className="col-md-6" controlId="formGridEmail">
                                    <Form.Label> Price </Form.Label>
                                    <Form.Control type="number"
                                        placeholder="Add the price"
                                        name="price" required
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group className="col-md-6">
                                <Form.Control
                                    className="m-3"
                                    as="select"
                                    name="category"
                                    size="lg">
                                    <option> Category </option>
                                    <option value="white"> White wine </option>
                                    <option value="red"> Red wine </option>
                                    <option value="national"> National wine </option>
                                    <option value="international"> International wine </option>
                                    <option value="dry"> Dry wine </option>
                                    <option value="middle"> Middle dry wine </option>
                                    <option value="sweet"> sweet wine </option>
                                    <option value="rose"> Rose </option>
                                    <option value="cuvee"> Cuvee </option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea"
                                    rows={3}
                                    name="description"
                                />
                            </Form.Group>


                            <Form.Group className="char_box ">
                                <Form.Label>Characteristics</Form.Label>
                                <Form.Check
                                    name="chessy"
                                    value="true"
                                    className="col-md-2"
                                    type='checkbox'
                                    label='chessy'
                                    onChange={this.onChangeChessy}
                                    checked={this.state.chessy}
                                />
                                <Form.Check
                                    name="acid"
                                    value="true"
                                    className="col-md-2"
                                    type='checkbox'
                                    label='acid'
                                    onChange={this.onChangeAcid}
                                    checked={this.state.acid}
                                />


                            </Form.Group>
                            <Button variant="primary"
                                type="submit"
                                className="col-md-12 mb-3">
                                <LocalBarIcon />
                             Add!
                            <LocalBarIcon />
                            </Button>
                        </Form>
                    </Fragment>
                </Jumbotron>
            </>
        )

    }
}

export default (ProductForm)