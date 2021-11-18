import React from 'react'
import Chat from './Chtat'
import AnotheDay from './AnotheDay'
import FormArea from './FormArea'
import classes from '../../../dist/css/message.module.css'
import {messageData} from '../../../templates/user/ShipmentsDetails2/message/operations'


const Message = () => {

  return (
    <div className={classes.massage}>
      <div className={classes.message_chats_area}>
        {messageData.map((value, index) => (
          <>
            <Chat type={value.type} content={value.content} date={value.created_at} key={index} mention={value.mention} />
            {index === 2 ? (<AnotheDay />): (<></>)}
          </>
        ))}

      </div>
      <FormArea />
    </div>
  )
}

export default Message