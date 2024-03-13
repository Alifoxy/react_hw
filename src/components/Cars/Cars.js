import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "./Car";
import {carsService} from "../../services";
import {carActions} from "../../store";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();


    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carActions.setAllCars(data)))
    }, [trigger, dispatch])

    return (
        <div className={'main_block'}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};