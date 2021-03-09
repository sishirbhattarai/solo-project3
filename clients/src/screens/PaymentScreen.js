import React from 'react';
import "./PaymentScreen.css";
import { Link } from "react-router-dom";


function Payment() {
    return (
<div className="wrapper">
  <h2>Payment Form</h2>
  <form method="POST">
    <h4>Account</h4>
    <div className="input-group">
      <div className="input-box">
        <input type ="text"
        placeholder="Full Name" required
        className="name"/>
        <i className="fa fa-user icon"></i>
      </div>
      <div className="input-box">
        <input type="text"
        placeholder="Nick Name" required
        className="name"/>
        <i className="fa fa-user icon"></i>
      </div>
    </div>
    <div className="input-group">
      <div className="input-box">
        <input type="email"
        placeholder="Email address" required
        className="name"/>
      </div>
    </div>
    <div className="input-group">
      <div className="input-box">
        <h4>Date of Birth</h4>
                <input type="text"
        placeholder="DD" 
        className="DOB"/>
                <input type="text"
        placeholder="MM" 
        className="DOB"/>
                <input type="text"
        placeholder="YYYY" 
        className="DOB"/>   
      </div>
    </div>
    <div className="input-group">
      <div className="input-box">
        <h4>Payment Details</h4>
        <input type="tel" placeholder="Card Number"
        required className="name"/>
       
        </div>
    </div>
    <div className="input-group">
      <div className="input-box">
        <h4>Payment Details</h4>
        <input type="tel" placeholder="Card CVV"
        required className="name"/>
        
      </div>
      <div class="input-box">
        <select>
          <option>01 Sep</option>
          <option>01 Oct</option>
          <option>01 Nov</option>
          <option>01 Dec</option>
        </select>
        <select>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
    </div>
    <div className="input-group">
      <div className="input-box">
        
         <button><Link to="/thankyou">Pay Now</Link></button>
         
         
        </div>
    </div>
  </form>
</div>

    )};

export default Payment;