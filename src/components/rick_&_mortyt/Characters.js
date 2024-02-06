import React from 'react';
import {Character} from './Character'
const App = () => {
    const characters = [
        {
            id:1,
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male"
        },
        {
            id:2,
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male"
        },
        {
            id:3,
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female"
        },
        {
            id:4,
            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female"
        },
        {
            id:5,
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male"
        },
        {
            id:6,
            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female"
        },
    ]

    return(
        <div>
            {
                characters.map(character =><Character key = {character.id} character={character}/>)
            }
        </div>
    );
};
export{App};