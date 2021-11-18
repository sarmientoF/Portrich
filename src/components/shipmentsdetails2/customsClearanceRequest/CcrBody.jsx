import React from 'react'
import classes from '../../../dist/css/shipmentsdetails_customsclearancerequest.module.css'
import { ReactComponent as Arrow } from '../../../dist/images/→.svg'
import { ReactComponent as Transportation } from '../../../dist/images/transportation.svg'
import { ReactComponent as Card } from '../../../dist/images/card.svg'
import { ReactComponent as Man } from '../../../dist/images/man_blue.svg'
import { ReactComponent as Telephone } from '../../../dist/images/telephone_blue.svg'


const CrrBody = (props) => {
  const {items} = props

  return (
    <div className={classes.customsclearancerequest_body}>
      <div className={`${classes.body_gray_wrap} ${classes.body_unit}`}>
        <div className={classes.gray_head_wrap}>
          <div className={classes.gray_import_export}>{items.import}</div>
          <div className={classes.arrow}><Arrow /></div>
          <div className={classes.gray_import_export}>{items.export}</div>
        </div>
        <div className={classes.gray_tag_wrap}>
          <div className={classes.tag_blue}>FOB</div>
          <div className={classes.tag_ransportation}><Transportation />FCL</div>
          <div className={classes.tag_card}><Card />Aircraft, spacecraft, Aircraft, spacecraft</div>
        </div>
        <div className={classes.gray_foot_wrap}>
          <div className={classes.foot_unit}>
            <div className={classes.company_name}>{items.company_name}</div>
            <div className={classes.user_no}>ユーザ管理番号：{items.user_no}</div>
          </div>
          <div className={classes.foot_unit}>
            <div className={classes.foot_text}>コンテナの数量：{items.number_of_containers}</div>
            <div className={classes.foot_text}>{items.truck_scale}</div>
          </div>
        </div>
      </div>
      <div className={`${classes.body_unit} ${classes.body_flex}`}>
        <div className={classes.request_details}>
          <div className={classes.head}>依頼詳細</div>
          <div className={classes.text}>配送希望日時選択：{items.delivery_date}</div>
          <div className={classes.text}>軸数：{items.number_of_axes}</div>
          <div className={classes.text}>回収希望日時：{items.collect_date}</div>
        </div>
        <div className={classes.information}>
          <div className={classes.head}>担当者の情報</div>
          <div className={classes.text}><Man />担当者名：{items.manager}</div>
          <div className={classes.text}><Telephone />現場担当者の電話番号：{items.telephone}</div>
        </div>
      </div>
      <div className={`${classes.body_unit} ${classes.body_}`}>
        <div className={classes.drage_head}>
          <div className={classes.drage}>ドレージ</div>
          <div className={classes.tag_blue}>FOB</div>
        </div>
        <div className={classes.loading}>積載：{items.loading}</div>
        <div className={classes.drage_border_wrap}>
          <div className={classes.drage_unit}>
            <div className={classes.text}>作業時間</div>
            <div className={classes.data}>{items.time}</div>
          </div>
          <div className={classes.drage_unit}>
            <div className={classes.text}>作業場所名</div>
            <div className={classes.data}>{items.place}</div>
          </div>
          <div className={classes.drage_unit}>
            <div className={classes.text}>作業場所住所</div>
            <div className={classes.data}>{items.address}</div>
          </div>
          <div className={classes.drage_unit}>
            <div className={classes.text}>対象ポート</div>
            <div className={classes.data}>{items.port}</div>
          </div>
          <div className={classes.drage_unit}>
            <div className={classes.text}>料金</div>
            <div className={`${classes.data} ${classes.blue}`}>{items.price}</div>
          </div>
        </div>
      </div>
      <div className={`${classes.body_unit} ${classes.body_truck_quote}`}>
        <div className={classes.truck_head}>トラック見積もり情報</div>
        <div className={classes.truck_text}>通関あり</div>
        <div className={classes.truck_text}>国外側通関の依頼あり</div>
        <div className={classes.truck_text}>通関依頼あり</div>
        <div className={classes.truck_text}>保険依頼あり</div>
      </div>
    </div>
  )
}

export default CrrBody