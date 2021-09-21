import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <i className="fa fa-caret-right" />
          </div>
        )}

        <div className="col d-tree-head ">
          <div className="treename-widgt accent-border-color p-2">
            <div className="tree-wdgt-name">
              {node.name}
              <br />
              <spann>{node.designation}</spann>
            </div>
            <div className="tree-wdgt-tooltip">
              <spann className="tootip-phmail">
                <em className="fa fa-envelope-o"></em> {node.email}
              </spann>
              <br />
              <spann className="tootip-phmail">
                <em className="fa fa-phone"></em> {node.mobilenumber}
              </spann>
            </div>
          </div>
        </div>
      </div>
      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;



