import React from "react";
import data from "../../temp.json";


function RtiAct() {
  return (
    <>
      <div>
        {data.Rti.map((information) => {
          return (
            <section className="container">
              <div className="row">
                <section className="">
                  <h3>{information.heading}</h3>
                  <h4>{information.header}</h4>
                  <p className="p-2">{information.paragraph}</p>
                </section>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default RtiAct;