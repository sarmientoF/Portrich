import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_document.module.css'
import {ReactComponent as Portrich} from '../../../dist/images/decument_portrich_icon.svg';

import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiIconButton-label": {
      color: "#7D7D7D",
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#7D7D7D',
    },
  },
}));


const DocumentDetailItem = (props) => {
  const {value, index, widthList} = props
  const styles = useStyles();

  return (
    <li className={`${classes.detaile_item} ${styles.root}`} key={index}>
      <FormControlLabel
        control={<Checkbox />}
      />
      <div className={classes.data} style={widthList[0]}>
        <div className={classes.value}>{value.folder_name}</div>
      </div>
      <div className={`${classes.data} ${classes.flex}`} style={widthList[1]}>
        <div className={classes.icon}><Portrich /></div>
        <div className={classes.value}>{value.registered_person}</div>
      </div>
      <div className={classes.data} style={widthList[2]}>
        <div className={classes.value}>{value.update_date}</div>
      </div>
      <div className={`${classes.data} ${classes.circle}`} style={widthList[3]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </li>

  )
}

export default DocumentDetailItem