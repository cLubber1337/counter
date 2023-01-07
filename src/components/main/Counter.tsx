import React from 'react';
import {BoardCounter} from "./BoardCounter";
import {ControlPanel} from "./ControlPanel";

type PropsType = {
    countNumbers: () => void
    number: number | string
    resetCountNumbers: () => void
    disabledForInc:boolean
    disabledForReset: boolean
    classNameForBoard: string
    classNameForButtonInc: string
    classNameForButtonReset: string
    classNameForBoardNumber: string
}


export const Counter = (props: PropsType) => {
    return (
        <div>
            <BoardCounter
                number={props.number}
                className={props.classNameForBoard}
                classNameForBoardNumber={props.classNameForBoardNumber}
            />
            <ControlPanel
                countNumbers={props.countNumbers}
                resetCountNumbers={props.resetCountNumbers}
                classNameForButtonInc={props.classNameForButtonInc}
                classNameForButtonReset={props.classNameForButtonReset}
                disabledForInc={props.disabledForInc}
                disabledForReset={props.disabledForReset}
            />
        </div>
    );
};

