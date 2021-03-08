import React from 'react';
import "./PaymentScreen.css";


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
        <i className="fa fa-envelope"></i>
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
      <div className="input-box">
        <h4>Gender</h4>
                <input type="radio" id="b1"
       name="gender"  checked className="radio"/>
                <label for="b1">Male</label>
                <input type="radio" id="b2"
       name="gender"  checked className="radio"/>
                <label for="b2">Female</label>
      </div>
    </div>
    <div className="input-group">
      <div className="input-box">
        <h4>Payment Details</h4>
        <input type="radio" id="bc1"
       name="pay"  checked className="radio"/>
       <label for="bc1"><span><i class="fa fa-cc-visa"></i>Credit Card</span></label>
       <input type="radio" id="bc2"
       name="pay"  checked className="radio"/>
       <label for="bc1"><span><i class="fa fa-cc-paypal"></i>Paypal</span></label>
        </div>
      </div>
    <div className="input-group">
      <div className="input-box">
        <h4>Payment Details</h4>
        <input type="tel" placeholder="Card Number"
        required className="name"/>
        <i class="fa fa-credit-card icon"></i>
        </div>
      </div>
    <div className="input-group">
      <div className="input-box">
        <h4>Payment Details</h4>
        <input type="tel" placeholder="Card CVV"
        required className="name"/>
        <i class="fa fa-user icon"></i>
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
  </form>
</div>

    )};

export default Payment;