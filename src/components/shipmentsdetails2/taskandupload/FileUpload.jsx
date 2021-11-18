import React, {useRef} from 'react'
import classes from '../../../dist/css/shipmentsdetails_taskandupload.module.css' ;
import { ReactComponent as Sample } from '../../../dist/images/home.svg';


const FileUpload = (props) => {
  const inputRef = useRef(null);

  const onFileInputChange = (e) => {
    console.log(e.target.files[0]);
  };

  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  return (
      <div className={classes.fileUpload}>
        <div className={classes.fileUpload_inner}>
          <Sample />
          <div className={classes.text}>ここにファイルをドラッグ＆ドロップ</div>
          <div className={`${classes.text} ${classes.small}`}>pdf、.xls、.xlsx、.doc、.docxが使用可能</div>
          <div className={`${classes.text} ${classes.medium}`}>または</div>
          <button onClick={fileUpload} className={`${classes.text} ${classes.button}`}>あなたのPCから選択</button>
          <input
            hidden
            ref={inputRef}
            type="file"
            accept=".pdf,.xls,.xlsx,.doc,.doc"
            onChange={onFileInputChange}
          />
        </div>
        <span onClick={() => props.setAploadArea(true)}>戻る</span>
      </div>
  )
}

export default FileUpload