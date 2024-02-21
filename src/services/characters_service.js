import {urls} from "../constants";
import {episodesAPIService} from "./episodes_api_service";

export const charactersService = {
    getCharactersById: (epId) => episodesAPIService.get(urls.characters.byId(epId)),
}