import React from 'react';

function ListItem({desc,isCompleted,onTaskComplete,id}) {
  return (
    <li style={{ textDecoration: isCompleted? 'line-through' : 'none' }} onClick={(e)=>{onTaskComplete(e,id)}}>{desc}</li>
  )
}

export default ListItem