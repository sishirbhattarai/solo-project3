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
                <a href="/shop">
                <img src="/Capture.PNG" className="iphone" alt="electronic" />
                </a>
            </div>
            <div className="col-2">
                <p>Now Available !</p>
                <h1>Iphone 12 </h1>
                <small>5G speed. Blast past fast. Buy now. Special Verizon offer available at apple.com. Ceramic Shield. <br />Super Retina XDR display. A14 Bionic chip. 5G. Services</small>
            </div>

        </div>
    </div>
   </div>

   <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Andrroid and IOS mobile phone.</p>
                    <div className="app-logo">
                      <img src="./app-store.png" alt="electronic" />
                      <img src="./play-store.png" alt="electronic" />
                    </div>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>

            </div>
            <p className="copyright"> Copyright@easyshopping.com 2021</p>
        </div>
    </div>
</div>

)};


export default Welcome;