import { styled } from "@mui/material/styles";
import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { SearchBar } from "./SearchBar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
  "& .css-1wlk0hk-MuiAvatar-root": {
    width: "auto",
    height: "auto",
  },
  "& .css-ank3r8-MuiBadge-badge": {
    right: "22%",
  },
}));

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
          <div className="name-text">
            <h4>John Doe</h4>
            <p>Admin</p>
          </div>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="" src="http://saptaphere.com/uploads/SAPT01196.jpg" />
          </StyledBadge>
        </div>
      </div>
    </div>
  );
};
