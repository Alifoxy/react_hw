export const Todo = ({todo}) => {
    const {id, title, completed} = todo;

    return (
        <div className={'todo_block'}>
            <div>
                <div>id: {id}</div>
                <div>title:{title}</div>
                <div>completed:{completed}</div>
            </div>
        </div>
    );

}