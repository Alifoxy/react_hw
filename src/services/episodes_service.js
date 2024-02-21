import {urls} from "../constants/urls";
import {episodesAPIService} from "./episodes_api_service";

export const episodesService = {
    getAll: (page = '1') => episodesAPIService.get(urls.episode.base,{params: {page}}),
    getUsersById: (epId) => episodesAPIService.get(urls.episode.byId(epId)),
}