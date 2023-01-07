import React from 'react';


type PropsType = {
    name: string
    callBack?: () => void
    disabled: boolean
    className: string
}

export const SuperButton: React.FC<PropsType> = ({name, disabled, callBack,className}) => {
    return (
        <div>
            <button className={className} disabled={disabled} onClick={callBack}>{name}</button>
        </div>
    );
};

