import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_document.module.css'
import {Button, makeStyles} from '@material-ui/core';
import { ReactComponent as Download } from '../../../dist/images/download.svg';
import { ReactComponent as DustBox } from '../../../dist/images/dust_box.svg';
import {Item} from '../../../templates/user/ShipmentsDetails2/document/operations';
import DocumentDetailItem from './DocumentDetailItem'

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#fff",
    color: "#0753CC",
    textAlign: "center",
    fontSize: '14px',
    display: 'block',
    width: '132px',
    borderRadius: '2px',
    border: "0.5px solid #0753CC",
    boxShadow: 'none',
    '&:hover': {
      opacity: '0.8',
    },
  },
  root: {
    '& .MuiButton-contained:hover': {
      background: "inherit",
      boxShadow: 'none',
    },
  },
}));


const headTitle = ["フォルダ名", "登録者", "更新日"]

const widthList = [
  { width: "300px" },
  { width: "150px" },
  { width: "150px" },
  { width: "30px" },
];


const DocumentDetail = (props) => {
  const styles = useStyles()
  const {setData} = props

  const clickEvent = () => {
    setData([]);
  }

  return (
    <div className={classes.document_detail}>
      <div className={`${classes.document_detail_headTool} ${styles.root}`}>
        <div className={classes.headTool_icon}><Download />一括ダウンロード</div>
        <div className={classes.headTool_icon} onClick={() => clickEvent()} ><DustBox />一括削除</div>
        <Button variant="contained" className={styles.button}>新規追加</Button>
      </div>
      <div className={classes.document_detail_body}>
        <ul className={classes.body_head_list}>
          {headTitle.map((value, index) => (
            <li style={widthList[index]} className={classes.body_head_item} key={index}>{value}</li>
          ))}
        </ul>
        <ul className={classes.body_list}>
          {Item.map((value, index) => ( 
            <DocumentDetailItem value={value} index={index} widthList={widthList} />
          ))}
        </ul>
      </div>
    </div>  
  )
}

export default DocumentDetail