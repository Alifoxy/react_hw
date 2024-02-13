import {jsonAPIService} from "./json_api_service";
import {urls} from "../constants/urls";

export const commentsService = {
    getAll: () => jsonAPIService.get(urls.comments),
}