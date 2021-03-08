import React from 'react';
import "./WelcomeScreen.css";


function Welcome() {
    return (
<div className="header">
  <div className ="row">
    <div className="col-2">
        <h1> A new ERA of shopping is here. <br />Give Your Shopping A New Style!</h1>
        
        <p>If you can't stop thinking about it...BUY IT.</p>
        <a href="/shop" class="btn">Shop Now</a>
    </div>

    <div className="col-2">
        <img src="/shop.jpg" className="shop" alt="prod"/>
         
    </div>
</div>

<div className="exclusive">
    <div className="container-1">
        <div className="row">
            <div className="col-2">
                <img src="/Capture.PNG" className="iphone" alt="electronic" />
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