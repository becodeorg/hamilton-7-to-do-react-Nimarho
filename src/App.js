import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex-col w-full h-screen text-center">
      <Title />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
