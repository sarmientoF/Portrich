import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_quote.module.css'
import {QuoteData} from '../../../templates/user/ShipmentsDetails2/quote/operations'
import QuoteContent from './QuoteContent'

const Quote = () => {
  return (
    <div className={classes.quote}>
      <QuoteContent  data={QuoteData}/>
    </div>
  )
}
export default Quote