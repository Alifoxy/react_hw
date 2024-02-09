import {UsersAPIService} from "./users_api_service";
import {urls} from "../constants/urls";
import {axiosRequest} from "../axios/axiosConfig";

export const UsersService = {
    getAll: () => UsersAPIService.get(urls.users),
    createUser: (newUser) => axiosRequest.post(urls.users, newUser),
}