import './TodoList.css';

const TodoList = (props) =>{
    return (
        <ul>{
            props.dataToDoValue.map((dataToDo) => {
                //{id : 1, title : 'Muhammad Abili'}
                return <li key = {dataToDo.id}>{dataToDo.title}</li>
            })
        }</ul>
    )
}

export default TodoList;