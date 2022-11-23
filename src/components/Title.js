function Title(props) {
    const show = props.mobile ? "hidden" : "text-4xl font-bold bg-gray-800 p-10 text-white";
    return (
        <h1 className={show} >To Do List</h1>
    );
}

export default Title;