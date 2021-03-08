import React from 'react';
import "./WelcomeScreen.css";


function Welcome() {
    return (
<div className="header">
  <div className ="row">
    <div className="col-2">
        <h1> Give Your Shopping <br />A New Style!</h1>
        
        <p>If you can't stop thinking about it...BUY IT.</p>
    </div>

    <div className="col-2">
        <img src="/shop.jpg" className="shop" alt="prod"/>
         
    </div>
</div>

<div className="exclusive">
    <div className="container-1">
        <div className="row">
            <div className="col-2">
                <img src="/mobile.jpg" className="iphone" alt="electronic" />
            </div>
            <div className="col-2">
                <p>Now Available !</p>
                <h1>Iphone 12 </h1>
                <small>5G speed. Blast past fast. Buy now. Special Verizon offer available at apple.com. Ceramic Shield. <br />Super Retina XDR display. A14 Bionic chip. 5G. Services</small>
            </div>

        </div>
    </div>
  </div>
</div>

    )};


export default Welcome;