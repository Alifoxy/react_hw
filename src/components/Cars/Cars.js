import {Car} from "./Car";

const Cars = ({cars, setUpdateCar, resetTrigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} resetTrigger={resetTrigger}/>)}
        </div>
    );
};
export {Cars};

