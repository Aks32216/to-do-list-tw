import React from 'react'

function RemoveCompletedTaskButton({onClearTaskClick}) {
  return (
    <button onClick={()=>{onClearTaskClick()}}>Remove Completed</button>
  )
}

export default RemoveCompletedTaskButton