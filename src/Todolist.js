function Todolist() {
    return (
        <div className='flex-col'>
          <h2 className='text-3xl'>TODOS</h2>
          <div className='flex-col text-left w-1/2'>
            <div><input type="checkbox" id="todoItem" /><label for="todoItem">Learn React</label></div>
            <div><input type="checkbox" id="todoItemTwo" /><label for="todoItemTwo">Be Awesome!</label></div>
          </div>
        </div>
    );
}

export default Todolist;