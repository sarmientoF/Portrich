import React from 'react'
import {Button, makeStyles} from '@material-ui/core';
import classes from '../../../dist/css/message.module.css'
import { ReactComponent as Icon } from '../../../dist/images/form_icon.svg'
import { ReactComponent as File } from '../../../dist/images/form_file.svg'

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



const FormTool = () => {
  const styles = useStyles()
  return (
    <div className={`${styles.root} ${classes.form_tool}`}>
      <div className={classes.form_icon}><Icon /></div>
      <div className={classes.form_icon}><File /></div>
      <Button variant="contained" className={styles.button}>送信</Button>
    </div>
  )
}
export default FormTool