import React from "react";
import data from "../../../temp.json";
import "./styles.css";




function index() {
  return (
    <>
      {data.BannedDrugs.map((information) => {
        return (
          <section className="container">
            <div className="row">
              <section className="col-lg-8 p-4 ">
                <h3 className=" contnt m-3">{information.heading}</h3>
                <p>{information.header}</p>

                {information.detailservices.map((content) => {
                  return (
                    <div>
                      <h4 className=" subheader1 ">{content.header}</h4>
                      <section>
                        {content.paragraph.map((detail) => {
                          return (
                            <ul>
                              <li className="subheader2">{detail.p}</li>
                            </ul>
                          );
                        })}
                      </section>
                    </div>
                  );
                })}
              </section>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default index;
