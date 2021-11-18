import React, { useState } from 'react'
import classes from '../../../dist/css/shipmentsdetails_document.module.css'
import DocumentTop from './DocumentTop'
import DocumentDetail from './DocumentDetail'

const Document = () => {
  const [data, setData] = useState([])

  return (
    <div className={classes.document}>
      {data <= 0 ? (
        <>
        <DocumentTop setData={setData} data={data} />
        </>
        ):(
          <>
        <DocumentDetail setData={setData} />
</>
      )}
    </div>
  )
}

export default Document;
