import React from "react";
import { SearchBar } from "./SearchBar";

export const Header = ({ filterData }) => {
  return (
    <div className="header">
      <div className="header-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPnzngE3zr3Hgqd3txs0QG8WAIMZAo2fK6ryfOSgYih7ubIe1B6bHcM7GvIM3d96R_zk&usqp=CAU"
          alt=""
          className="brand-logo"
        />
        <SearchBar filterData={filterData} />
        <div className="name">
          <div>
            <h4>John Doe</h4>
            <p>Admin</p>
          </div>
          <img alt="" src="http://saptaphere.com/uploads/SAPT01196.jpg" />
        </div>
      </div>
    </div>
  );
};
