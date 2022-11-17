import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        My todo App
      </h1>
      <form action="" method="">
        <input type="text" name="todo" placeholder='type a new todo'></input>
        <input type="submit" value="Add Todo"></input>
        <div>
          <h2>TODOS</h2>
          <input type="checkbox" id="todoItem" /><label for="todoItem">Learn React</label>
          <input type="checkbox" id="todoItemTwo" /><label for="todoItemTwo">Be Awesome!</label>
        </div>
      </form>
    </div>
  );
}

export default App;
