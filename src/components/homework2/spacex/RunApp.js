import React, { useState } from 'react';
import {Launches} from "./Launches";


export const App = () => {
    const [setFlightId] = useState(null);

    return (
        <div>
            <div className={'main_block'}>
                <Launches setFlightId={setFlightId}/>
            </div>
        </div>
            );
        };