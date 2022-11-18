
//import { useState } from "react";

// function addToDoItem() {
    
// }

function Form() {
    return (
        <form /*onSubmit={addToDoItem}*/>
            <input
            /*onChange={handleChange}
            value={inputValue}*/
            placeholder='type a new todo' />
            <button type="submit">Add</button>
        </form>
    );
}

export default Form;