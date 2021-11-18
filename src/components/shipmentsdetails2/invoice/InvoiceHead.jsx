import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_invoice.module.css'


const InvoiceHead = (props) => {
  const {data} = props

  return (
    <div className={classes.invoice_head}>
      <div className={classes.invoice_head_unit}>
        <div className={classes.text}>ステータス</div>
        <div className={classes.data}>{data[0]}</div>
      </div> 
      <div className={classes.invoice_head_unit}>
        <div className={classes.text}>支払い期日</div>
        <div className={classes.data}>{data[1]}</div>
      </div> 
      <div className={classes.invoice_head_unit}>
        <div className={classes.text}>料金</div>
        <div className={`${classes.data} ${classes.bold}`}>{data[2]}</div>
      </div> 
    </div>
  )
}

  export default InvoiceHead