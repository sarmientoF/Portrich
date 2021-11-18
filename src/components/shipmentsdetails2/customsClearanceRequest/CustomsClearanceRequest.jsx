import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_customsclearancerequest.module.css'
import CcrHead from './CcrHead'
import CcrBody from './CcrBody'
import {DetailItem} from '../../../templates/user/ShipmentsDetails2/customsClearanceRequest/operations'

const CustomsClearanceRequest = () => {
  return (
    <div className={classes.customsclearancerequest}>
      <CcrHead />
      <CcrBody items={DetailItem} />
    </div>
  )
}

export default CustomsClearanceRequest
