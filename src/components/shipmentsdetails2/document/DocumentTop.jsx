import React, {useRef} from 'react'
import classes from '../../../dist/css/shipmentsdetails_document.module.css'
import {Button, makeStyles} from '@material-ui/core';
import { ReactComponent as Sample } from '../../../dist/images/home.svg';


const useStyles = makeStyles((theme) => ({
  button: {
    background: "#0753CC",
    color: "#fff",
    textAlign: "center",
    fontSize: '12px',
    display: 'block',
    width: '131px',
    borderRadius: '2px',
    boxShadow: 'none',
    margin: '0 0 0 auto',
    '&:hover': {
      opacity: '0.8',
    },
  },
  root: {
    '& .MuiButton-contained:hover': {
      background: "#0753CC",
      boxShadow: 'none',
    },
  },
}));

const DocumentTop = (props) => {
  const styles = useStyles()
  const inputRef = useRef(null);
  const {data, setData} = props

  const onFileInputChange = (e) => {
    console.log(e.target.files);
    setData([...data, 1])
  };

  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  return (
    <div className={`${classes.document_top} ${styles.root}`}>
      <Button variant="contained" className={styles.button}>新規追加</Button>
      <div className={classes.document_top_upload}>
      <Sample />
          <div className={classes.text}>ここにファイルをドラッグ＆ドロップ</div>
          <div className={`${classes.text} ${classes.small}`}>pdf、.xls、.xlsx、.doc、.docxが使用可能</div>
          <div className={`${classes.text} ${classes.medium}`}>または</div>
          <button onClick={fileUpload} className={`${classes.text} ${classes.button}`}>あなたのPCから選択</button>
          <input
            hidden
            ref={inputRef}
            type="file"
            accept=".pdf,.xls,.xlsx,.doc,.doc"
            onChange={onFileInputChange}
          />
      </div>
    </div>
  )
}

export default DocumentTop