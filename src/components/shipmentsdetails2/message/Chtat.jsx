import React from 'react'
import classes from '../../../dist/css/message.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Portrich from '../../../dist/images/portrich_icon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '20px',
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiAvatar-root': {
      border: 'solid 1px #F2F3F5',
      width: '56px',
      height: '55px',
      margin: '0'
    },
    '& .MuiAvatar-img': {
      width: 'auto',
      height: 'auto',
    }
  },
}));

const Chat = (props) => {
  // 受け取るデータは0がportrich、1がuser true処理はportrich表示
  const type = props.type === 0 ? true : false;
  const company = type ? 'Portrichサポートチーム' : 'Ingredia Nutrisha';
  const styles = useStyles();

  return (
    <>
      <div className={`${classes.chat} ${styles.root}`}>
        {type ?
          (<Avatar alt="Portrich icon" src={Portrich} />) :
          (<Avatar style={{backgroundColor: '#000'}} />)
        }
        <div className={classes.chat_data}>
          <div className={classes.chat_company}>{company}</div>
          <div className={classes.chat_date}>{props.date}</div>
          {props.mention !== undefined ? (<div className={classes.chat_mention}>@{props.mention}</div>) : (<></>)}
          <div className={classes.chat_content}>{props.content}</div>
        </div>
      </div>
    </>
  )
}

export default Chat;