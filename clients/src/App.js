import React from "react";
import './App.css';
import {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//importing Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import PaymentScreen from "./screens/PaymentScreen";
import Thankyouscreen from "./screens/Thankyouscreen";

import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import Footer from "./components/Footer";

function App() {

  const [sideToggle, setsideToggle] =useState(false);
  return (
    <Router>
      <Navbar click={() => setsideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setsideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setsideToggle(false)}/>
            
       <main>
         <Switch>
           <Route exact path="/" component={WelcomeScreen}/>
           <Route exact path="/shop" component={HomeScreen}/>
           <Route exact path="/product/:id" component={ProductScreen}/>
           <Route exact path="/cart" component={CartScreen}/>
           <Route exact path="/payment" component={PaymentScreen}/>
           <Route exact path="/thankyou" component={Thankyouscreen}/>
         </Switch>
       </main>
       <Footer />
    </Router>
  );
}

export default App;