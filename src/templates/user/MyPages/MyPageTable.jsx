import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchMembers, deleteUser } from "./users/operations";
import { getIsStaff } from "../../../reducks/users/selectors";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      fontSize: 13,
    },
  },
});

const MyPageTable = (props) => {
  const classes = useStyles();
  const [members, setMembers] = useState([]);
  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);
  useEffect(() => {
    fetchMembers(setMembers);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {isStaff ? <TableCell align="center">会社名</TableCell> : <></>}
            <TableCell align="center">アカウントID</TableCell>
            <TableCell align="center">名前</TableCell>
            <TableCell align="center">役職</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((row, index) => (
            <TableRow key={index}>
              {isStaff ? (
                <TableCell align="center">{row.company_name}</TableCell>
              ) : (
                <></>
              )}
              <TableCell align="center" component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.department}</TableCell>
              <TableCell align="center">
                <Button
                  disabled={row.isRepresentative}
                  onClick={() => deleteUser(row.id, setMembers)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyPageTable;
