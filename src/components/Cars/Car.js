import {useDispatch} from "react-redux";

import {carActions} from "../../store";
import {carsService} from "../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const deleteById = async () => {
        await carsService.deleteByd(id)
        dispatch(carActions.trigger())
    };

    return (
        <div className={'mini_block'}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteById}>delete</button>
        </div>
    );
};

export {Car};
