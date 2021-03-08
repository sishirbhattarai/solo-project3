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
  </form>

  </div>

    )};

export default Payment;