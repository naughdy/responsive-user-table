import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material";
import CustomizedButtons from "./ModalButton";

const StyledTableStatus = styled("div")(({ theme, mycolor }) => {
  return {
    color: mycolor.text,
    backgroundColor: mycolor.bg,
    width: "max-content",
    borderRadius: 15,
    padding: 5,
    display: "inline",
  };
});

const StyledTableName = styled("div")({
  alignItems: "center",
  alignSelf: "flex-start",
  width: "-webkit-fill-available",
  display: "flex",
  justifyContent: "space-between",
  "& .avtar": {
    width: 50,
    hieght: 50,
    borderRadius: 25,
  },
  "& .name": {
    marginLeft: 10,
  },
  "& h3": {
    color: "#7367F0",
    fontWeight: "bold",
    margin: "5px 0 0 0",
  },
  "& p": {
    margin: 0,
  },
  "& .start-div": {
    display: "flex",
  },
});

function SimpleDialog(props) {
  const { onClose, open, user } = props;

  return (
    <Dialog open={open} onBackdropClick={onClose}>
      <h2>Contact Details</h2>
      <StyledTableName>
        <div className="start-div">
          <img className="avtar" alt="" src={user.avatar} />
          <div className="name">
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>@{user.first_name}</p>
          </div>
        </div>
        <StyledTableStatus
          mycolor={
            user.id % 2
              ? { bg: "lightgreen", text: "green" }
              : user.id % 3
              ? { bg: "lightgray", text: "gray" }
              : user.id % 5
              ? { bg: "#FEF3E8", text: "#FCAE61" }
              : "NA"
          }
        >
          {user.id % 2
            ? "active"
            : user.id % 3
            ? "inactive"
            : user.id % 5
            ? "removed"
            : "NA"}
        </StyledTableStatus>
      </StyledTableName>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium
        fusce id. Urna duis convallis convallis tellus id interdum.
      </p>
      <h3>More Contact Details</h3>
      <CustomizedButtons />
    </Dialog>
  );
}

export default function SimpleDialogDemo({ open, onClose, user }) {
  return <SimpleDialog open={open} onClose={onClose} user={user} />;
}
