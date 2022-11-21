import React from "react";
import ListTodo from "./ListTodo";


function TodoList(prop) {
    return (
        <div>
            {prop.todos.map((todo) =>
                <ListTodo key={todo.id} value={todo.task} isDone={todo.done} todos={prop.todos} id={todo.id} setTodos={prop.setTodos}/>
            )}
        </div>
    );
}

export default TodoList;