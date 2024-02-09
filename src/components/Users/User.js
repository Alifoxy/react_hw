import React from 'react';

export const User = ({users}) => {

    return (
        <div className={'user_block'}>
            {users.map(user => {
                const {id, username} = user;
                return (
                    <div key={id}>
                        <div>id:{id}</div>
                        <div>username:{username}</div>
                    </div>
                )
            })}
        </div>
    );

}
