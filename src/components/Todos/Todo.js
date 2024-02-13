export const Todo = ({todo}) => {
    const {id, title, completed} = todo;

    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>title:{title}</div>
                <div>completed:{completed.toString()}</div>
            </div>
        </div>
    );

}