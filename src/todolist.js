import React from 'react'

function todolist(props) {
  return (
   <li className='list-item'>
   {props.item}
    <span className='icons'>
    <i className="fa-solid fa-trash icon-delete" onClick={(e) => {props.deleteitem(props.index)}}></i>
    </span>
   </li>
  )
}

export default todolist;
