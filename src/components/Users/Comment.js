import React from 'react';

export const Comment = ({comments}) => {

    return (
        <div>
            <h1>Comments</h1>
            {comments.map(item => {
                const {id, name} = item;
                return (
                    <div key={id}>
                        <div>id:{id}</div>
                        <div>name:{name}</div>
                    </div>
                )
            })}
        </div>
    );

}