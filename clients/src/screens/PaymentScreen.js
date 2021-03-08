import React from 'react';
import "./PaymentScreen.css";


function Payment() {
    return (
<div className="checkout">
    <div className="checkout-container">
     <h3 className="heading-3">Credit card checkout</h3>
     <input label="Cardholder's Name" type="text" name="name" />
     <input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
      <div className="row">
        <div className="col">
          <input label="Expiration Date" type="month" name="exp_date" />
        </div>
        <div className="col">
          <input label="CVV" type="number" name="cvv" />
        </div>
      </div>
      <button text="Place order" />
    </div>
 </div>
    )};

export default Payment;