const todo = (props) => {
    return (
        <li key={props.index}> {props.title} <button onClick={() => {props.deleteTodo(props.index)}}> Ta bort </button></li>
    )
}
export default todo;