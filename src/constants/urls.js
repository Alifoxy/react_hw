export const EpisodesBaseURL = 'https://rickandmortyapi.com/api'


const episode = '/episode';
const characters = '/characters';


export const urls = {
    episode:{
        base:episode,
        byId: (id) => `${episode}/${id}`,
    },

}



