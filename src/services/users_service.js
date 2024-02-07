import {UsersAPIService} from "./users_api_service";
import {urls} from "../constants/urls";

export const UsersService = {
    getAll: () => UsersAPIService.get(urls.users)
}