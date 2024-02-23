import {urls} from "../constants";
import {episodesAPIService} from "./episodes_api_service";

export const charactersService = {
    getCharactersById: (charId) => episodesAPIService.get(urls.characters.byId(charId)),
}