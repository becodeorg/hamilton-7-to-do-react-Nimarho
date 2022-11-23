import React from "react";


function ListTodo(todoItem) {
    const handleChange = (id) => {
        const newArr = todoItem.todos.map((todo) =>{
            if(todo.id === id){
                todo.done = !todo.done;
           }
           return todo;
        })
        todoItem.setTodos(newArr);
    }

    const handleDelete = (id) => {
        const newArr = todoItem.todos.filter(todo => todo.id !== id);
        todoItem.setTodos(newArr);
    }

    
    const notCrossedOut = 'text-l px-5 py-2.5 mr-2';
    const crossedOut = notCrossedOut+' line-through';
    return  (<div 
                className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-indigo-300 bg-gradient-to-r from-indigo-100 to-transparent hover:from-indigo-200 transition ease-linear duration-150"
                >
                <div 
                    className="inline-flex items-center space-x-2 w-full"
                    onClick={() => handleChange(todoItem.id)}>
                    <input 
                        id={todoItem.id}
                        className=""
                        name="task"
                        type="checkbox"
                        checked={todoItem.isDone? true : false}
                    />
                    <p className={todoItem.isDone ? crossedOut : notCrossedOut}>  {todoItem.value.length > 35? todoItem.value.slice(0,30)+"..." : todoItem.value}  </p>
                </div>
                <button
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full"
                    onClick={() => handleDelete(todoItem.id)}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>);
}

export default ListTodo;