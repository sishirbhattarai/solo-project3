import React from 'react';
import "./Footer.css";


function Footer() {
    return (
<footer>

        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download Our App</h3>
                    <div className="app-logo">
                      <img src="./app-store.png" alt="electronic" />
                      <img src="./play-store.png" alt="electronic" />
                    </div>
                </div>
                <p className="copyright"> Copyright@easyshopping.com 2021</p>
                <div className="footer-col-2">
                    <h3>Follow us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</footer>
    )};

    export default Footer;