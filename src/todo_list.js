import React from "react";
import { useState } from "react";
import './todo_list.css'



function Todo(props) {
    const [input, setInput] = useState('');

    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(input)
            setInput("")
        }
    }
     
    return (
        <>
        
        <div className="todo">TODO</div>
        <div className="mainTodo">List</div>
        <div className="input-container">
            <input type="text" className="input-box-todo" placeholder="Enter Your Todo"  value={input}  onChange={(e) => {setInput(e.target.value)}} onClick={handleEnterPress}/>
            <button className="btn" onClick={() =>{props.addList(input)
             setInput("")}} >+</button>
        </div>
        </>
    )
}

export default Todo;