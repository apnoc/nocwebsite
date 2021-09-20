// import React from 'react';
// import './Footer.css';
// import {Link} from 'react-router-dom';
// import data from '../../sitedata.json';

// function Footer() {
//   return (
//    <>
//    <section className="footer">
//    <div className="container">
//    <div className="row">
//     {
//                   data.footer.map((home) => {
//                   return(
//                     <>
//                       <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center ">
//                       <Link className='social-logo'>
//                           <p >{home.header}</p>
//                           </Link>
//                       </div>
//                       <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">
//                           <small className='col-xs-12 col-sm-12 col-md-4  text-white'>{home.subheader}</small>
//                        </div>
//                       <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">
//                       <div className='social-icons'>
//                      {
//                        home.socialLinks.map((details) => {
//                          return(
//                            <>
//                                   <Link
//                                   className={details.icon}
//                                   to={details.link}
//                                   target={details.target}
//                                   aria-label={details.arialabel}
//                                   >
//                                   <i className={details.iconlink} />
//                                   </Link>
//                            </>
//                          )
//                        })
//                      }
//                      </div>
//                       </div>
//                     </>
//                   )})}
//     </div>
//     </div>
//     </section>
// </>
//   );
// }
// export default Footer;

import React from "react";
import "./Footer.css";
import Subfooter from "./subfooter";
import ScrollToTopBtn from "./ScrollToTop.js";

function Footer() {
  return (
    <>
      <ScrollToTopBtn />
      <div className="footer">
      <div className="footer_top p-3 text-center">
          <Subfooter />
        </div>
        <div className="footer_bottom">
          <section className="footer_subscription">
            <p className="footer_subscription_heading1">
              © NIC APSC , Developed and hosted by &nbsp;
              <a href="https://www.nic.in/">National Informatics Centre,</a>
              <br />
              <a href="https://www.meity.gov.in/">
                Ministry of Electronics & Information Technology, Government of
                India
              </a>
            </p>
            <p className="footer_subscription_heading2">
              AP State Center, Vijayawada
            </p>
          </section>
          <section className="text-center">
            <div>
              <a className="logo1" href="https://ap.nic.in/">
                <img
                  src="https://ap.nic.in/wp-content/themes/sdo-theme/images/nic.png"
                  alt="logo1"
                />
              </a>
              <a
                className="logo2"
                className="vl"
                href="https://www.digitalindia.gov.in/"
              >
                <img
                  src="https://ap.nic.in/wp-content/themes/sdo-theme/images/digitalIndia.png"
                  alt="logo2"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
