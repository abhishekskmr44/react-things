import React from 'react';
import { useState } from "react";

export const Todo = () => {

    // to "" as a intial input tag and then add task
    let [mytask, setMyTask] = useState("");

    // used intial empty [] for adding new task stored in array;
    let [addtodo, setAddTodo] = useState([]);

    // for writing task onchange
    const newTask = (el) =>{
        setMyTask(el.target.value);
        // setMyTask = sets the task and appends to the body
    }

    const addTask = () =>{
        setAddTodo([...mytask,addtodo]);
    }


    return(
        <>
        <h1>{mytask}</h1> 
        <input type={"text"} value={mytask} placeholder="Add any task" onChange={newTask}></input>
        <button onClick={() => addTask()}>Add Task</button>

        {addtodo.map((el) =>{
            return <h1>{el}</h1>
        })}
        </>
    )
}

