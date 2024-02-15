import {urls} from "../constants/urls";
import {jsonAPIService} from "./json_api_service";

export const usersService = {
    getAll: () => jsonAPIService.get(urls.users.base),
    getUsersById: (userId) => jsonAPIService.get(urls.users.byId(userId)),
}