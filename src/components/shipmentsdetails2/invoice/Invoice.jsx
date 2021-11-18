import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_invoice.module.css'
import InvoiceContent from './InvoiceContent';
import InvoiceHead from './InvoiceHead';
import {InvoiceData, InvoiceHeadData} from '../../../templates/user/ShipmentsDetails2/invoice/operations'

const Invoice = () => {
  return (
    <div className={classes.invoice}>
      <InvoiceHead data={InvoiceHeadData} />
      <InvoiceContent  data={InvoiceData}/>
    </div>
  )
}

export default Invoice