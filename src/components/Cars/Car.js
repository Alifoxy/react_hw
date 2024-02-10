import React from 'react';
import {CarsService} from "../../services/cars_service";

export const Car = ({car,setUpdateCar,resetTrigger}) => {
    const {id,brand, price, year} = car;
    const deleteCar = async () => {
        await CarsService.deleteCarByID(id)
        resetTrigger()
    }

    return (
        <div className={'car_block'}>
            <div>
                <div>id: {id}</div>
                <div>brand:{brand}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
                <button onClick={() => setUpdateCar(car)} className={'button'}>Update</button>
                <button onClick={deleteCar} className={'button'}>delete</button>
            </div>
        </div>
    );

}

