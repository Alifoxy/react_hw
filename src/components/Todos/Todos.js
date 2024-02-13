import {useEffect, useState} from "react";
import {Todo} from "./Todo";
import {todosService} from "../../services/todos_service";

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    }, []);

    return (
        <div className={'main_block'}>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};