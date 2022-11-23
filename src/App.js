import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import TodoList from './components/TodoList';
import SubTitle from './components/SubTitle';
//import data from './components/Data.json';
import React,{useState, useEffect} from 'react';

const LSKEY = "MyTodoApp";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    const list = JSON.parse(localStorage.getItem(LSKEY+".todos"));
    if(list && list.length > 0){
      setTodos(list);
    }
  },[]);
  
  useEffect(()=>{
    window.localStorage.setItem(LSKEY+".todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div>
      <Title />
      <main className='max-w-lg mx-auto my-10 bg-gradient-to-r from-indigo-100 p-8 rounded-xl shadow shadow-slate-300'>
        <SubTitle />
        <Form setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos} />
      </main>
    </div>
  );
}

export default App;
