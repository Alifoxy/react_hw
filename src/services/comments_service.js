import {UsersAPIService} from "./users_api_service";
import {urls} from "../constants/urls";

export const CommentsService = {
    getAll: () => UsersAPIService.get(urls.comments)
}