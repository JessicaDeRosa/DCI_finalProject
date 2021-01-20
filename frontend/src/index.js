import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/appBar';
import MainContainer from './components/mainContainer';
import RegistrationForm from './components/registrationForm';
import LogForm from './components/logIn';
import Footer from './components/footer/footer';
import SellerContainer from './components/sellerInterface/index'
import CustomerContainer from "./components/buyerInterface/customerIndex"



const Root = (
    <>
        <BrowserRouter>
        <AppBar />
            <Switch>
                <Route exact path="/" 
                component={MainContainer}/>
                <Route path="/register" 
                component={RegistrationForm} />
               <Route path="/logIn" 
               component={LogForm}/>
               <Route path="/sellerProfil?type=productForm">
               <SellerContainer/>
               </Route>
               <Route path="/sellerProfil?type=customerMessage">
               <SellerContainer/>
               </Route>
               <Route path="/sellerProfil">
               <SellerContainer/>
               </Route>
               <Route path="/customerProfil">
                   <CustomerContainer/>
               </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>

    </>
);

ReactDom.render(Root, document.getElementById('root'));