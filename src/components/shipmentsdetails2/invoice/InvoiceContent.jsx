import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_invoice.module.css'


const InvoiceContent = (props) => {
  const {data} = props

  return (
    <div className={classes.invoice_contnt}>
      <ul className={classes.invoice_contnt_list}>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Freight Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>Freight Charges</div>
            <div className={classes.data}>{data[0]}</div>
          </div>
        </li>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Origin Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>割増料金</div>
            <div className={classes.data}>{data[1]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>ドレージ料金</div>
            <div className={classes.data}>{data[2]}</div>
          </div>
        </li>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Customs  Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>輸入通関料</div>
            <div className={classes.data}>{data[3]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>輸入取扱料</div>
            <div className={classes.data}>{data[4]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>関西</div>
            <div className={classes.data}>{data[5]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>消費税</div>
            <div className={classes.data}>{data[6]}</div>
          </div>
        </li>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Additional Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>延滞料金</div>
            <div className={classes.data}>{data[7]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>検査費用</div>
            <div className={classes.data}>{data[8]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>Short Drayage</div>
            <div className={classes.data}>{data[9]}</div>
          </div>
        </li>
      </ul>

      <ul className={classes.invoice_contnt_list}>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Freight Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>Freight Charges</div>
            <div className={classes.data}>{data[0]}</div>
          </div>
        </li>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Origin Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>割増料金</div>
            <div className={classes.data}>{data[1]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>ドレージ料金</div>
            <div className={classes.data}>{data[2]}</div>
          </div>
        </li>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Customs  Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>輸入通関料</div>
            <div className={classes.data}>{data[3]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>輸入取扱料</div>
            <div className={classes.data}>{data[4]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>関西</div>
            <div className={classes.data}>{data[5]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>消費税</div>
            <div className={classes.data}>{data[6]}</div>
          </div>
        </li>
        <li className={classes.invoice_content_item}>
          <div className={classes.item_head}>Additional Charges</div>
          <div className={classes.flex}>
            <div className={classes.text}>延滞料金</div>
            <div className={classes.data}>{data[7]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>検査費用</div>
            <div className={classes.data}>{data[8]}</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.text}>Short Drayage</div>
            <div className={classes.data}>{data[9]}</div>
          </div>
        </li>
        <li className={`${classes.invoice_content_item} ${classes.invoice_content_item_tatal}`}>
          <div className={classes.flex}>
            <div className={classes.item_head}>合計</div>
            <div className={classes.data}>USED{data[10]}</div>
          </div>
          <div className={classes.price_ex}>EX RATE: {data[11]}</div>
        </li>
      </ul>
    </div>
    )
}

export default InvoiceContent