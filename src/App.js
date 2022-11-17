import './App.css';
import Title from './Title';
import Form from './Form';
import Todolist from './Todolist';

function App() {
  return (
    <div className="flex-col w-full h-screen text-center">
      <Title />
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
