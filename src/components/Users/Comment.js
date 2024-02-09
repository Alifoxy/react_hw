import React from 'react';

export const Comment = ({comments}) => {

    return (
        <div className={'comment_block'}>
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