import React from 'react';

type PropsType = {
    number:number
    className: string
}

export const BoardCounter = (props:PropsType) => {
    return (
        <div className={props.className} >
            <h1>{props.number}</h1>
        </div>
    );
};

