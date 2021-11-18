import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { deleteMailList, fetchMailLists } from "./users/operations";
import { AnnounceModal } from "../../../components/common/index";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      fontSize: 14,
    },
  },
});

const MyPageMailLists = (props) => {
  const { CompanyId } = props;
  const classes = useStyles();

  const [maillists, setMailLists] = useState([]);
  useEffect(() => {
    fetchMailLists(setMailLists);
  }, []);
  const extractionmaillist = maillists.filter(
    (mail) => mail.users_company === CompanyId
  );

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">メールアドレス</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {extractionmaillist.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => deleteMailList(row.id, handleModalOpen)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AnnounceModal
        isOpen={modalopen}
        setModalOpen={setModalOpen}
        title="追加宛先メールアドレスを削除しました。"
      />
    </>
  );
};

export default MyPageMailLists;
