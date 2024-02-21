import {urls} from "../constants";
import {episodesAPIService} from "./episodes_api_service";

export const episodesService = {
    getAll: (page = '1') => episodesAPIService.get(urls.episodes,{params: {page}}),
}