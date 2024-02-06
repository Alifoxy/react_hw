import React, { useState } from 'react';
import './style/RunAppCss.css';
import {Users} from "./Users";
import {UserPosts} from "./UserPosts";

export const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <div className={'main_block'}>
                <Users setUserId={setUserId}/>
                <UserPosts userId={userId}/>
            </div>
        </div>
            );
        };