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

    return  (<div>
                <input 
                    id={todoItem.id}
                    name="task"
                    type="checkbox"
                    onChange={() => handleChange(todoItem.id)}
                    checked={todoItem.isDone? true : false}
                />
                <label
                htmlFor={todoItem.id}
                className={todoItem.isDone ? 'ml-2 line-through' : 'ml-2 no-underline'}>
                {todoItem.value}
                </label>
            </div>);
}

export default ListTodo;