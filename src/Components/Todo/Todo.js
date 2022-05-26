import './Todo.css'
import {useState} from "react"
import TodoList from '../Todo-List/TodoList';
import TodoCreate from '../Todo-Create/TodoCreate';

const Todo = () => {

    const [getDataTodo, setDataTodo] = useState([
    ])

    const eventCreateTodo = (todo) =>{
        setDataTodo(getDataTodo.concat(todo))
        console.log(getDataTodo)
    }

    return (
        <div>
            <h3>selamat datang</h3>

            <TodoCreate onCreateTodo = {eventCreateTodo}/>

            <TodoList dataToDoValue = {getDataTodo}/>
        </div>
    )
}

export default Todo;