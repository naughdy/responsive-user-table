import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SimpleDialogDemo from "./Modal";
import { Button } from "@mui/material";
import { SideDetails } from "./SideDetails";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "#6E6B7B",
  textAlign: "left",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F3F2F7",
    fontWeight: "700",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 500,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 500,
  },
}));

const StyledTableName = styled("div")({
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
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
    fontWeight: 600,
    margin: "5px 0 0 0",
    fontSize: 14,
  },
  "& p": {
    margin: 0,
    fontSize: 12,
    marginTop: 5,
    color: "#B9B9C3",
  },
});

const StyledTableStatus = styled("div")(({ theme, mycolor }) => {
  return {
    color: mycolor.text,
    backgroundColor: mycolor.bg,
    width: "max-content",
    borderRadius: 15,
    padding: "1px 9px 1px 9px",
    fontSize: 12,
    fontWeight: 600,
    display: "inline",
  };
});

const StyledTable = styled("div")(({ theme, displayDirection }) => {
  return {
    display: "flex",
    flexDirection: displayDirection,
    marginLeft: displayDirection === "row" ? 65 : 0,
    flex: 2,
  };
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "& td, & th": {
    border: 0,
  },
}));

export default function CustomizedTables({
  data,
  loadData,
  openSideDetails,
  setSideUser,
}) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [displayDirection, setDisplayDirection] = useState("column");

  return (
    <StyledTable display={displayDirection} className="inner-table-container">
      <div className="side-table">
        <div className="table-header">
          <h2>Visitors</h2>
          <Button variant="contained">Add Visitor</Button>
        </div>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 700,
            }}
            aria-label="customized table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <StyledTableCell width="30%">NAME</StyledTableCell>
                <StyledTableCell width="35%" align="center">
                  EMAIL
                </StyledTableCell>
                <StyledTableCell width="35%" align="center">
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                return (
                  <StyledTableRow key={row.id} id={`row-${row.id}`}>
                    <StyledTableCell component="th" scope="row">
                      <StyledTableName
                        onClick={() => {
                          setDisplayDirection("row");
                          setUser(row);
                          setSideUser(row);
                          openSideDetails();
                          // setOpen(true);
                        }}
                      >
                        <img className="avtar" alt="" src={row.avatar} />
                        <div className="name">
                          <h3>
                            {row.first_name} {row.last_name}
                          </h3>
                          <p>@{row.first_name}</p>
                        </div>
                      </StyledTableName>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StyledTableStatus
                        mycolor={
                          row.id % 2
                            ? {
                                bg: "rgba(40, 199, 111, 0.12)",
                                text: "#28C76F",
                              }
                            : row.id % 3
                            ? {
                                bg: "rgba(108, 117, 125, 0.12)",
                                text: "#6C757D",
                              }
                            : row.id % 5
                            ? {
                                bg: "rgba(255, 159, 67, 0.12)",
                                text: "#FF9F43",
                              }
                            : "NA"
                        }
                      >
                        {row.id % 2
                          ? "Active"
                          : row.id % 3
                          ? "Inactive"
                          : row.id % 5
                          ? "Removed"
                          : "NA"}
                      </StyledTableStatus>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
          {/* <SimpleDialogDemo
          open={open}
          onClose={() => setOpen(false)}
          user={user}
        /> */}
        </TableContainer>
      </div>
    </StyledTable>
  );
}
