import React from 'react';

const Todo = () => {

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
        <h1>Todo App</h1> 
        <input type={"text"} value={task} placeholder="Add any task" onChange={newTask}></input>
        <button onClick={addTask}>Add Task</button>
        </>
    )
}

export default Todo;