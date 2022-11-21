
import React,{ useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Form(prop) {
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;
        const newArr =JSON.parse(JSON.stringify(prop.todos));
        const newTask = {
            id : uuidv4(),
            task : inputElement.value,
            done : false
        };
        newArr.push(newTask);
        prop.setTodos(newArr);
    }

    return (
        <div className="py-20">
            <input
            className="p-1 w-full max-w-[250px] rounded-md border-2 border-slate-500"
            ref={inputRef}
            type="text"
            placeholder='type a new todo' />
            <button
            className="bg-blue-400 rounded-md p-2 text-white mt-5 font-bold" 
            onClick={clickHandler}
            type="submit"
            >Add Todo</button>
        </div>
    );
}
