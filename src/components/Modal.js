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
    padding: "1px 9px 1px 9px",
    display: "inline",
    fontSize: 12,
    fontWeight: 600,
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
    hieght: 20,
    borderRadius: 25,
  },
  "& .name": {
    marginLeft: 10,
  },
  "& h3": {
    color: "#7367F0",
    fontWeight: 600,
    margin: "5px 0 0 0",
    fontSize: 14,
    textAlign: "left",
  },
  "& p": {
    margin: 0,
    color: "#B9B9C3",
    marginTop: 5,
  },
  "& .start-div": {
    display: "flex",
  },
});

function SimpleDialog(props) {
  const { onClose, open, user } = props;

  return (
    <Dialog open={open} onBackdropClick={onClose}>
      <div className="modal">
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
                ? { bg: "rgba(40, 199, 111, 0.12)", text: "#28C76F" }
                : user.id % 3
                ? { bg: "rgba(108, 117, 125, 0.12)", text: "#6C757D" }
                : user.id % 5
                ? { bg: "rgba(255, 159, 67, 0.12)", text: "#FF9F43" }
                : "NA"
            }
          >
            {user.id % 2
              ? "Active"
              : user.id % 3
              ? "Inactive"
              : user.id % 5
              ? "Removed"
              : "NA"}
          </StyledTableStatus>
        </StyledTableName>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
          nisl pretium fusce id. Urna duis convallis convallis tellus id
          interdum.
        </p>
      </div>
      <div className="modal-footer">
        <h3>More Contact Details</h3>
        <CustomizedButtons />
      </div>
    </Dialog>
  );
}

export default function SimpleDialogDemo({ open, onClose, user }) {
  return <SimpleDialog open={open} onClose={onClose} user={user} />;
}
