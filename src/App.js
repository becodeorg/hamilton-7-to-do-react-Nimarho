import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import TodoList from './components/TodoList';
import data from './components/Data.json';
import React,{useState} from 'react';


function App() {
  const [todos, setTodos] = useState(data);
  return (
    <div>
      <Title />
      <main className='px-10'>
        <Form setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos} />
      </main>
    </div>
  );
}

export default App;
