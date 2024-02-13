import {urls} from "../constants/urls";
import {jsonAPIService} from "./json_api_service";

export const albumsService = {
    getAll: () => jsonAPIService.get(urls.albums),
}