import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_customsclearancerequest.module.css'
import { ReactComponent as Prev } from '../../../dist/images/arrow_prev.svg'
import { ReactComponent as Edit } from '../../../dist/images/edit_blue.svg'

const CcrHead = () => {
  return (
    <div className={classes.customsclearancerequest_head}>
      <div className={classes.head_prev}><Prev />詳細入力画面へ戻る</div>
      <div className={classes.head_title_wrap}>
        <div className={classes.head_title}>基本情報を確認する</div>
        <div className={classes.head_edit}>
        <Edit />編集
        </div>
      </div>
    </div>
  )
}

export default CcrHead
