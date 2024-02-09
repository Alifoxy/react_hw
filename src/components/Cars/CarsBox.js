import React from 'react';
import { useEffect, useState } from "react";
import {CarForm} from "./CarForm";
import {Car} from "./Car";
import {CarsService} from "../../services/cars_service";
import "./Style/CarsStyle.css"
import {Cars} from "./Cars";

export const CarsBox = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        CarsService.getAll().then(({data}) => setCars([...data]))
    }, []);

    return (
        <div>
            <div className={'main_block'}>
                <hr/>
                <h1>Cars</h1>
                <hr/>
                <CarForm setCars={setCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
                <Cars cars={cars} setUpdateCar={setUpdateCar}/>
            </div>
        </div>
    );
};