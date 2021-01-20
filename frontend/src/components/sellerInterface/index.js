import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  ListGroup,
  Jumbotron,
  Card
} from 'react-bootstrap';
import MessageTable from './message';
import ProductForm from './productForm';
import ProductsTable from './productsTable';

function SellerContainer() {
 
   const { search } = useLocation();
   const match = search.match(/type=(.*)/);
   const type = match?.[1];
    return (
      <>
        <Jumbotron className="mt-3 p-0 row " id="container-Seller">
          <Card style={{ width: '18rem' }} 
          className="mr-4">
            <ListGroup variant="flush">
              <ListGroup.Item variant="danger">Your winery</ListGroup.Item>
              <ListGroup.Item>
                <a href="/sellerProfil?type=productForm">
                  Add Products
                  </a> 
                  </ListGroup.Item>
              <ListGroup.Item>
                <a href="/sellerProfil?type=customerMessage">
                  Customer messages
                  </a>
                  </ListGroup.Item>
              <ListGroup.Item>
                <a href="/sellerProfil?type=profil">
                  Your Profil
                  </a>
                  </ListGroup.Item>
              <ListGroup.Item>
                <a href="/sellerProfil?type=costumShop">
                Costumize your winery
              </a></ListGroup.Item>
              <ListGroup.Item>
                <a href="/sellerProfil?type=editProduct">
                Edit your products
              </a>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {type === 'productForm' && <ProductForm/>}
          {type === 'editProduct' && <ProductsTable/>}
          {type === 'customerMessage' && <MessageTable/>}
        </Jumbotron>
      </>
    )

  }
export default SellerContainer;

