import React from "react";
import "./styles.css";
import HeaderLink from "../../Components/Header/HeaderLink";

function index() {
  return (
    <>
      <div className="contactus">
        <div className="container">
          <h1 className="common__heading">Contact Us</h1>
          <div className="row display__flexbox">
            <div className="col-sm-6 col-md-4">
              <div className="contactus__card text-center">
                <span className="icon__address">
                  <img
                    alt="Address"
                    src="./images/address.png"
                    title="Address"
                  />
                </span>
                <h4>Address</h4>
                <address className="">
                  Network Operator Center
                  <br />
                  NOC, Andhra Pradesh 600 036
                  <br />
                  INDIA
                </address>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="contactus__card text-center">
                <span className="icon__directory">
                  <img
                    alt="Directory"
                    src="./images/directory.png"
                    title="Directory"
                  />
                </span>
                <h4>Directory</h4>
                <p className="">
                  Search the Directory for listings of all people and locations
                  in NOC
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="contactus__card text-center">
                <span className="icon__campusmap">
                  <img
                    alt="Campus Map"
                    src="./images/campus-map.png"
                    title="Campus Map"
                  />
                </span>
                <h4>Campus Map</h4>
                <p className=""> 
                  <HeaderLink to="nocmap" title="View a map">
                    View a map &nbsp;
                  </HeaderLink>
                  of the NOC
                </p>
              </div>
            </div>
          </div>
          <p className="my-5">
            <b>Please note:</b> The Offices, Departments, Research Centres and
            other FacilDCAes have their own numbers. Please consult the
            Directory or the Department/Centre websites.
          </p>
        </div>
      </div>
    </>
  );
}

export default index;
