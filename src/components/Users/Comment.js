import React from 'react';

export const Comment = ({comment}) => {
    const {id, name} = comment;
    return (
        <div className={'comment_block'}>
            <div key={id}>
                <div>id:{id}</div>
                <div>name:{name}</div>
            </div>
        </div>
    );

}