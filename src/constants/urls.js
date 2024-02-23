export const EpisodesBaseURL = 'https://rickandmortyapi.com/api'


const episodes = '/episode';
const characters = '/character';


export const urls = {
    episodes,
    characters:{
        base:characters,
        byId: (id) => `${characters}/${id}`,
    },

}



