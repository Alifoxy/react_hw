import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "./Character";
import {charactersService} from "../../services";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {charId} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        charactersService.getCharactersById(charId).then(({data}) => setCharacters(data))
    }, [charId]);

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={'main_block'}>
            <div><button onClick={back} className={'button'}>back</button></div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>

    );
};

export {Characters};