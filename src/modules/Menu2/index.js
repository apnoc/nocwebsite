import React from "react";
import Tree from "./Tree";

const treeData = [
  {
    key: "0",
    name: "Dr. Iniya Nehru E ",
    designation: "SIO",
    email: "nehru[at]nic[dot]in",
    mobilenumber: "040-23494300",
    children: [
      {
        key: "0-0",
        name: "Shri P.Lakshminarayana ",
        designation: "Scientist-F",
        email: "pln[at]nic[dot]in",
        mobilenumber: "0863-2235212",
        children: [
          {
            key: "0-1",
            name: " Shri Y.V.K.S.R. Murthy ",
            designation: "Scientist-F",
            email: "yvksrmurty[at]nic[dot]in",
            mobilenumber: "0891-2563429",
            children: [
              {
                key: "0-1-0",
                name: " Shri Shaik Hameed Pasha ",
                designation: "Scientist-C",
                email: "pasha[at]nic[dot]in",
                mobilenumber: "0891-2563429",
              },
            ],
          },
          {
            key: "0-2",
            name: "Dr. T R Vijay Kumar",
            designation: "Scientist-E",
            email: "tr[dot]vijayakumar[at]nic[dot]in",
            mobilenumber: "08562-256529",
          },
        ],
      },
      {
        key: "0-0",
        name: " Shri Sivakumar R",
        designation: "Scientist-F",
        email: "rs[dot]kumar[at]nic[dot]in",
        mobilenumber: "0863-2235212",
        children: [
          {
            key: "0-1",
            name: " Shri Y.V.K.S.R. Murthy ",
            designation: "Scientist-F",
            email: "yvksrmurty[at]nic[dot]in",
            mobilenumber: "0891-2563429",
            children: [
              {
                key: "0-1-0",
                name: " Shri Shaik Hameed Pasha ",
                designation: "Scientist-C",
                email: "pasha[at]nic[dot]in",
                mobilenumber: "0891-2563429",
              },
            ],
          },
          {
            key: "0-2",
            name: "Dr. T R Vijay Kumar",
            designation: "Scientist-E",
            email: "tr[dot]vijayakumar[at]nic[dot]in",
            mobilenumber: "08562-256529",
          },
        ],
      },
      {
        key: "0-0",
        name: "Shri S.V.Ch.Subba Rao",
        designation: "Scientist-F",
        email: "srao[at]nic[dot]in",
        mobilenumber: "0863-2235212",
        children: [
          {
            key: "0-1",
            name: "Shri S.M.M.Kalyan Kumar",
            designation: "Scientist-C",
            email: "kumar[dot]kalyan[at]nic[dot]in",
            mobilenumber: "0891-23494174",
          },
          {
            key: "0-1",
            name: " Shri Y.V.K.S.R. Murthy ",
            designation: "Scientist-F",
            email: "yvksrmurty[at]nic[dot]in",
            mobilenumber: "0891-2563429",
            children: [
              {
                key: "0-1-0",
                name: " Shri Shaik Hameed Pasha ",
                designation: "Scientist-C",
                email: "pasha[at]nic[dot]in",
                mobilenumber: "0891-2563429",
              },
            ],
          },
          {
            key: "0-2",
            name: "Dr. T R Vijay Kumar",
            designation: "Scientist-E",
            email: "tr[dot]vijayakumar[at]nic[dot]in",
            mobilenumber: "08562-256529",
          },
        ],
      },
    ],
  },
];

const index = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center m-3">
          <h2>NIC Organization Structure</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treeData} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
