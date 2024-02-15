import {jsonAPIService} from "./json_api_service";
import {urls} from "../constants/urls";

export const commentsService = {
    getByPostId: (postId) => jsonAPIService.get(urls.comments.byId(postId)),
}