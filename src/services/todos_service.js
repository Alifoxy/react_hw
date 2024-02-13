import {urls} from "../constants/urls";
import {jsonAPIService} from "./json_api_service";

export const todosService = {
    getAll: () => jsonAPIService.get(urls.todos),
}