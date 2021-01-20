import React, { Component } from 'react';
import axios from 'axios';
import {Table,Button,Modal } from 'react-bootstrap';
import ProductNav from './productNav'
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


class ProductsTable extends Component {
    state={
        products : [],
        show : false,
        
    }
    componentDidMount= ()=>{
        this.getProducts();
    }
    getProducts = () =>{
        axios.get('/products/findProduct')
        .then((res)=>{
            const data = res.data;
            this.setState({products:data});
            console.log('products were found')
        })
        .catch(err=>{
            console.log (err)
        })
    }
     handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});
    render() {

        return (

            <>
                {/* <ToastContainer /> */}
                <div className="ml-6">
                <ProductNav/>
                <h1>Your products</h1>
                <Table 
                striped bordered 
                hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                         this.state.products.map((item,index)=>{
                             return(
                            <tr key={index}>
                            <td>{item.product_id}</td>    
                            <td>{item.product_name}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <Button 
                                className="m-2"
                                variant="warning"
                                onClick={this.handleShow}
                                >
                                 edit
                                </Button>
                                <Button variant="danger">
                                 delete
                                </Button>
                            </td>
                        </tr> )
                         })
                     }
                      
                    </tbody>
                </Table> 
                <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>here i can edit my product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
               
            </>
        )

    }
}

export default (ProductsTable)