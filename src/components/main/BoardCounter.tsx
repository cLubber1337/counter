import React from 'react';

type PropsType = {
    number:number | string
    className: string
    classNameForBoardNumber: string
}

export const BoardCounter = (props:PropsType) => {
    return (
        <div className={props.className} >
            <span className={props.classNameForBoardNumber}>{props.number}</span>
        </div>
    );
};

