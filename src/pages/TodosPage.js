import {Todos} from "../components/Todos/Todos";

const TodosPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Todos</h2>
            </div>
            <Todos/>
        </div>
    );
};

export {TodosPage};