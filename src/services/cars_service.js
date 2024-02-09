import {urls} from "../constants/urls";
import {CarsAPIService} from "./cars_api_service";

export const CarsService = {
    getAll:()=>CarsAPIService.get(urls.cars)
}