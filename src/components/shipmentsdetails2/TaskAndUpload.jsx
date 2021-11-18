import React, { useState } from 'react'
import TaskArea from './taskandupload/TaskArea'
import FileUpload from './taskandupload/FileUpload'

const TaskAndUpload = () => {
  const [uploadArea, setAploadArea] = useState(true)

  return (
    <>
      {uploadArea ? (
        <TaskArea setAploadArea={setAploadArea} />
        ): (
        <FileUpload setAploadArea={setAploadArea}/>
      )}
    </>
  )
}

export default TaskAndUpload