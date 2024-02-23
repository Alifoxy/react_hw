export const Character = ({character}) => {
    const {id, name, image} = character;

    return (
        <div className={'mini_block'}>
            <div>
                <div>id: {id}</div>
                <div>name:{name}</div>
                <img src={image} alt={'name'}/>
            </div>
        </div>
    );

}