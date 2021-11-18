import React from 'react'
import classes from '../../../dist/css/message.module.css'
import { makeStyles } from '@material-ui/core/styles';
import {TextInput} from '../../Uikit/index'
import FormTool from './FormTool'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-input': {
      height: '100px',
    },
    '& .MuiOutlinedInput-multiline': {
      lineHeight: 1.2,
      fontSize: '14px',
      padding: '10px 14px'
    }
  },
}));



const FormArea = () => {
  const styles = useStyles();

  return (
    <form className={`${styles.root} ${classes.form}`} noValidate >
      <TextInput
        id={undefined}
        variant="outlined"
        fullWidth={true}
        label={'メッセージを送信する'}
        margin={"normal"}
        multiline={'multiline'}
        rows={2}
        className={styles.textInput}
      >
      </TextInput>
      <FormTool />
    </form>
  )
}

export default FormArea