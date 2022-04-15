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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "lightgray",
    fontWeight: 700,
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
    fontWeight: "bold",
    margin: "5px 0 0 0",
  },
  "& p": {
    margin: 0,
  },
});

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ data, loadData }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleScroll = (data) => {
    const { scrollTop, scrollHeight, clientHeight } = data.target;
    if (scrollTop + clientHeight === scrollHeight) {
      loadData();
    }
  };

  return (
    <>
      <div className="table-header">
        <h2>Visitors</h2>
        <Button variant="contained">Add Visitor</Button>
      </div>
      <TableContainer component={Paper} onScroll={handleScroll}>
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
                        setUser(row);
                        setOpen(true);
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
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    <StyledTableStatus
                      mycolor={
                        row.id % 2
                          ? { bg: "lightgreen", text: "green" }
                          : row.id % 3
                          ? { bg: "lightgray", text: "gray" }
                          : row.id % 5
                          ? { bg: "#FEF3E8", text: "#FCAE61" }
                          : "NA"
                      }
                    >
                      {row.id % 2
                        ? "active"
                        : row.id % 3
                        ? "inactive"
                        : row.id % 5
                        ? "removed"
                        : "NA"}
                    </StyledTableStatus>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
        <SimpleDialogDemo
          open={open}
          onClose={() => setOpen(false)}
          user={user}
        />
      </TableContainer>
    </>
  );
}
