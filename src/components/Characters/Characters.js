import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "./Character";
import {charactersService} from "../../services";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {epId} = useParams()

    useEffect(() => {
        charactersService.getCharactersById(epId).then(({data}) => setCharacters(data))
    }, [epId]);

    return (
        <div className={'main_block'}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>

    );
};

export {Characters};