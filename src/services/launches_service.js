import {urls} from "../constants/urls";
import {SpaceXAPIService} from "./spacex_api_service";

export const LaunchesService = {
    getAll:()=>SpaceXAPIService.get(urls.launches)
}