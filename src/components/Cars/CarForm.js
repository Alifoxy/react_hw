import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import { CarsService } from "../../services/cars_service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";


export const CarForm = ({setCars,updateCar,setUpdateCar}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid},setValue} = useForm({mode: 'all',resolver:joiResolver(carValidator)});

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar]);

    const submit = async (data) => {
        await CarsService.createCar(data).then(({data}) => setCars((prevState) => [...prevState, data]))
        reset()
    }

    const update = (data) => {
        CarsService.updateCarByID()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'form'}>
            <input type="text" placeholder="brand" {...register('brand')}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <input type="text" placeholder="price" {...register('price')}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text" placeholder="year" {...register('year')}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid} className={'button'}>Submit</button>
        </form>
    );
};