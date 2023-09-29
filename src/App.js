import React, { useState } from 'react'
import Todo from './todo_list'
import todolist from './todolist';
import "./todo_list.css";

function App() {
  const [todo, setTodo] = useState([]);
  let addList = (input) => {
    if(input!=='')
    setTodo([...todo, input]);
  }

  const deletelistitem = (key) => {
    let newListTodo = [...todo];
    newListTodo.splice(key,1)
    setTodo([...newListTodo])
  }
  return (
    <div className='main-container'>
    <div className='center-container'>
    <Todo addList={addList}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>{todo.map((listItem,i) => {
        return (
         <Todo  key= {i}  index = {i} item = {listItem} deleteItem = {deletelistitem}/>
        )
      })}
    </div>
    </div>
  )
}

export default App
