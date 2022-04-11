import logo from './logo.svg';
import './App.css'
// import List from './day1/List';
// import Input from './day1/Input';
// import EmployeeDetails from './day1/EmployeeDetails'
import Counter from "./Usestate&Props/Counter"
// import { useState } from 'react';
import {Todo} from './Todoapp/Todo'

function App() {
  // const [intialCount, setInitialCount] = useState(21);

  return (
    <div className="App">

      <h1>Masai School</h1>
      {/* <List/> */}
      {/* <Input/> */}
      {/* <EmployeeDetails /> */}
      <Counter intialCount={intialCount} />

      <Todo/>
    </div>
  );
}

export default App;
