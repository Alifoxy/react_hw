import {UsersAPIService} from "./users_api_service";
import {urls} from "../constants/urls";
import {axiosRequest} from "../axios/axiosConfig";

export const CommentsService = {
    getAll: () => UsersAPIService.get(urls.comments),
    addComment: (data) => axiosRequest.post(urls.comments, data)
}