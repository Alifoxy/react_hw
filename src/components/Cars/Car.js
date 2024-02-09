import React from 'react';

export const Car = ({cars,setUpdateCar}) => {

    return (
        <div className={'car_block'}>
            {cars.map(car => {
                const {id,brand, price, year} = car;
                return (
                    <div key={id}>
                        <div>brand:{brand}</div>
                        <div>price:{price}</div>
                        <div>year:{year}</div>
                        <button onClick={() => setUpdateCar(car)} className={'button'}>Update</button>
                    </div>
                )
            })}
        </div>
    );

}

