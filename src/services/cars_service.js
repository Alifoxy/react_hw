import {urls} from "../constants/urls";
import {CarsAPIService} from "./cars_api_service";

export const CarsService = {
    getAll:()=>CarsAPIService.get(urls.cars.base),
    createCar: (data) => CarsAPIService.post(urls.cars.base, data),
    updateCarByID: (id, data) => CarsAPIService.put(urls.cars.byId(id), data),
    deleteCarByID: (id) => CarsAPIService.delete(urls.cars.byId(id)),
}