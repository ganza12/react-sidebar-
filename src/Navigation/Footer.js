import React from 'react';
import './Footer.css';
function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row top-footer">
                    {/* column1 */}
                    <div className="col-md-3 col-sm-12 col-lg-3">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>+250781299528</li>
                            <li>Kigali-Rwanda</li>
                            <li>Nyarugenge</li>
                            <li>alterrwanda@gmail.com</li>
                        </ul>
                    </div>
                     {/* column2 */}
                     <div className="col-md-3 col-sm-12 col-lg-3">
                        <h4>Main Link</h4>
                        <ul className="list-unstyled">
                                <li>+250781299528</li>
                                <li>Kigali-Rwanda</li>
                                <li>Nyarugenge</li>
                                <li>alterrwanda@gmail.com</li>
                        </ul>
                     </div>
                      {/* column3 */}
                      <div className="col-md-3 col-sm-12 col-lg-3">
                      <h4>Main Link</h4>
                        <ul className="list-unstyled">
                                <li>+250781299528</li>
                                <li>Kigali-Rwanda</li>
                                <li>Nyarugenge</li>
                                <li>alterrwanda@gmail.com</li>
                        </ul>
                      </div>
                      {/* column4 */}
                      <div className="col-md-3 col-sm-12 col-lg-3">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>+250781299528</li>
                            <li>Kigali-Rwanda</li>
                            <li>Nyarugenge</li>
                            <li>alterrwanda@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row copyright">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Alter rwanda Corporation | All right reserved|Terms of Service |Privacy
                    </p>

                </div>
            </div>            
        </div>
    )
}

export default Footer;
