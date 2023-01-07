import React, {useEffect, useState} from 'react';
import s from "./Settings.module.css"
import {SuperButton} from "../main/SuperButton";


type PropsType = {
    classNameForButtonInc: string
    setStartNumber: (startNumber: number)=>void
    setMaxNumber: (maxNumber: number)=>void
    startNumber: number
    maxNumber: number
    setValue: (start: number, max: number) => void
    currNumber: number
    setCurrNumber:(currNumber: number)=>void
    disabledForSetValue: boolean

}

const Settings = (props: PropsType) => {

    const [startNum, setStartNum] = useState(0)
    const [maxNum, setMaxNum] = useState(0)

    useEffect(()=>{
        let valueMax = localStorage.getItem("maxValue")
        if(valueMax) {
            let newValue = JSON.parse(valueMax)
            setMaxNum(newValue)
            props.setMaxNumber(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("maxValue", JSON.stringify(maxNum))
    }, [maxNum])

    useEffect(()=>{
        let valueStart = localStorage.getItem("startValue")
        if(valueStart) {
            let newValue = JSON.parse(valueStart)
            setStartNum(newValue)
            props.setCurrNumber(newValue)
        }
    }, [])


    useEffect(()=>{
        localStorage.setItem("startValue", JSON.stringify(startNum))
    }, [startNum])


    return (
        <div className={s.setting}>

            <div className={s.settingPanel}>

                <div className={s.value}>
                    <span>Max value: </span>
                    <input className={s.input}
                           type={"number"}
                           onChange={e => {setMaxNum(JSON.parse(e.currentTarget.value))}}
                           value={maxNum}
                    />
                </div>

                <div className={s.value}>
                    <span>Start value: </span>
                    <input
                        className={s.input}
                        type={"number"}
                        onChange={e => {setStartNum(JSON.parse(e.currentTarget.value))}}
                        value={startNum}
                    />
                </div>

            </div>

            <div className={s.buttonDiv}>
                <SuperButton
                    name={"set"}
                    className={props.classNameForButtonInc}
                    callBack={() => props.setValue(startNum, maxNum )}
                    disabled={props.disabledForSetValue}

                />
            </div>
        </div>
    );
};

export default Settings;