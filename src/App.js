import './App.css'
// import List from './day1/List';
// import Input from './day1/Input';
// import EmployeeDetails from './day1/EmployeeDetails'
import { useState } from 'react';

// todos
import {Todo} from './Todoapp/Todo'
import {Todoapp} from './Todoapp/Todoapp'

// counter
import Counter from "./Usestate&Props/Counter"

// useffect-1 todo -Pagination
import {Todos} from "./Useeffect - 1/Todos"

// let todos = [
//   { id:1, value:"react", completed:true},
//   { id:2, value:"redct", completed:false}
// ]



function App() {
  const [intialCount, setInitialCount] = useState(20);

  return (
    <div className="App">
      {/* <h1>Masai School</h1> */}

      {/* <Todos /> */}

      {/* <Counter intialCount={intialCount} /> */}
      {/* <Todo/> */}
      {/* <Todoapp /> */}
      {/* <List/> */}
      {/* <Input/> */}
      {/* <EmployeeDetails /> */}
    </div>
  );
}

export default App;
