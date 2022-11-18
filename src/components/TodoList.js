import React,{useState} from "react";

function ListTodo(todoItem) {
    const [isDone, setIsDone] = useState(false);
    const handleChange = () => {
        setIsDone(current => !current);
    }
    
    return  (<li className={isDone ? 'line-through' : ''}>
                <input 
                    type="checkbox"
                    onChange={handleChange}
                />
                {todoItem.value}
            </li>);
}


function TodoList() {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, /*setTodos*/] = useState(initialTodos);
    return (
        <ul>
            {todos.map((todo) =>
                <ListTodo key={todo.toString()} value={todo} testValue={"hello world"} />
            )}
        </ul>
    );
}

export default TodoList;