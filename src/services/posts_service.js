import {urls} from "../constants/urls";
import {jsonAPIService} from "./json_api_service";

export const postsService = {
    getPostsByUserId:(userId)=>jsonAPIService.get(urls.posts.byUserId(userId)),
    getPostsById: (postId) => jsonAPIService.get(urls.posts.byId(postId)),
}