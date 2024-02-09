import React, { useEffect, useState } from 'react';
import {Launch} from "./Launch";
import {LaunchesService} from "../../services/launches_service";
import './style/LaunchesStyle.css';

export const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        LaunchesService.getAll().then(({data}) => {
            const filtered_launches = data.filter(item=>item.launch_year !== '2020')
            setLaunches(filtered_launches)
        });
    }, []);

    return (
        <div className={'main_block1'}>
            <div className={'flights_block'}>
                {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
            </div>
        </div>
    );
}

