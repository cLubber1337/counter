import React from 'react';
import {SuperButton} from "./SuperButton";

type PropsType = {
    countNumbers: () => void
    resetCountNumbers: () => void
    disabledForInc: boolean
    disabledForReset: boolean
    classNameForButtonInc: string
    classNameForButtonReset: string

}

export const ControlPanel = (props: PropsType) => {

    return (
        <div className={"buttons-div"}>
            <SuperButton name={"inc"}
                         className={props.classNameForButtonInc}
                         callBack={props.countNumbers}
                         disabled={props.disabledForInc}

            />
            <SuperButton
                name={"reset"}
                className={props.classNameForButtonReset}
                callBack={props.resetCountNumbers}
                disabled={props.disabledForReset}

            />
        </div>
    );
};

