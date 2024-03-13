import {urls} from "../constants";
import {carsAPIService} from "./cars_api_service";

export const carsService = {
    getAll: () => carsAPIService.get(urls.cars.base),
    create: (data) => carsAPIService.post(urls.cars.base, data),
    updateById: (id, data) => carsAPIService.put(urls.cars.byId(id), data),
    deleteByd: (id) => carsAPIService.delete(urls.cars.byId(id))
}