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

    return  (<div className="bg-sky-400 w-full max-w-[250px]">
                <input 
                    id={todoItem.id}
                    name="task"
                    type="checkbox"
                    onChange={() => handleChange(todoItem.id)}
                    checked={todoItem.isDone? true : false}
                />
                <label
                    htmlFor={todoItem.id}
                    className={todoItem.isDone ? 'ml-2 line-through text-sm px-5 py-2.5 mr-2 mb-2' : 'ml-2 no-underline text-sm px-5 py-2.5 mr-2 mb-2'}>
                    {todoItem.value}
                </label>
                <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => handleDelete(todoItem.id)}>
                    Delete
                </button>
            </div>);
}

export default ListTodo;