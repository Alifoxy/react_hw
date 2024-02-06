import React, { useEffect, useState } from 'react';
import {getLaunchesData} from "./api/GetInfo";
import {Launch} from "./Launch";
import './style/RunAppCss.css';

export const Launches = ({setFlightId}) => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunchesData().then(resp => setLaunches(resp));
    }, []);

    return (
        <div className={'flights_block'}>
            {launches.map(launch => <Launch key={launch.id} launch={launch} setFlightId={setFlightId}/>)}
        </div>
    );
}

