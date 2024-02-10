import React from 'react';

export const User = ({user}) => {
    const {id, username} = user;
    return (
        <div className={'user_block'}>
            <div>
                <div>id:{id}</div>
                <div>username:{username}</div>
            </div>
        </div>
    );

}
