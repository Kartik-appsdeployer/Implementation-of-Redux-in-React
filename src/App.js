import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {addTodo, deleteTodo, updateTodo} from './app/reducer';

function App() {

  const todoList = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({todoName: ""});
  const [newtodo, setNewTodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(addTodo(todo));
  }

  return (
    <div className="App">
      <div className="app-center">
        <div className="app-inputs">
          <input type="text" className="input" onChange={(e) => setTodo((prev) => ({...prev, todoName:e.target.value}))} placeholder="Add your Task" />
          <button className="todo-button" onClick={handleAdd}>Add Task</button>
        </div>

        {
          todoList.map((obj) => (
            <div className="all-tasks">
              <h2 className='Task'>{obj.todoName}</h2>
              <input type="text" className="update-task" onChange={(e) => setNewTodo(e.target.value)} placeholder='Update the task' /><br />
              <button className="update-button" onClick={() => {dispatch(updateTodo({id: obj.todoName, todoName: newtodo}))}}>Update Task</button><br />
              <button className="delete-task" onClick={() => dispatch(deleteTodo({todoName: obj.todoName}))}>Delete Task</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
