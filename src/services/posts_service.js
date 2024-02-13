import {urls} from "../constants/urls";
import {jsonAPIService} from "./json_api_service";

export const postsService = {
    getAll:()=>jsonAPIService.get(urls.posts.base),
    getPostsById: (postId) => jsonAPIService.get(urls.posts.byId(postId)),
}