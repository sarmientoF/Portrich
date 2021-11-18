import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#0753CC",
    color: "#fff",
    textAlign: "center",
    fontSize: '12px',
    display: 'block',
    width: '100%',
    borderRadius: '2px',
    boxShadow: 'none',
    '&:hover': {
      opacity: '0.8',
    },
  },
  root: {
    '& .MuiButton-root': {
      padding: '5px 8% 3px',
    },
    '& .MuiButton-contained:hover': {
      background: "#0753CC",
      boxShadow: 'none',
    },
  },
}));

const InvoiceListButton = (props) => {
  const styles = useStyles();
  const value = props.value
  return (
    <div className={styles.root}>
      <Button variant="contained" className={styles.button}>{value}</Button>
    </div>
  );
};

export default InvoiceListButton