import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../store";
import {Character} from "./Character";

const Characters = () => {
    const {charId} = useParams();
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(charactersActions.getAll({charId}))
    }, [charId])

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={'main_block'}>
            <div><button onClick={back} className={'button'}>back</button></div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};

