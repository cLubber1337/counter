import React, {useEffect, useState} from 'react';
import s from "./Settings.module.css"
import {SuperButton} from "../main/SuperButton";


type PropsType = {

    maxEnteredNumber: number
    setStartEnteredNumber:(newValue:number)=>void
    startEnteredNumber:number
    setMaxEnteredNumber: (startEnteredNumber:number)=> void

    classNameForButtonInc: string
    setStartNumber: (startNumber: number) => void
    setMaxNumber: (maxNumber: number) => void
    setValue: (start: number, max: number) => void
    setCurrNumber: (currNumber: number) => void
    disabledForSetValue: boolean
}

const Settings = (props: PropsType) => {
    const [startNum, setStartNum] = useState(0)
    const [maxNum, setMaxNum] = useState(0)



    useEffect(() => {
        let valueMax = localStorage.getItem("maxValue")
        if (valueMax) {
            let newValue = JSON.parse(valueMax)
            setMaxNum(newValue)
            props.setMaxNumber(newValue)
            props.setMaxEnteredNumber(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxNum))
        props.setMaxEnteredNumber(maxNum)

    }, [maxNum])

    useEffect(() => {
        let valueStart = localStorage.getItem("startValue")
        if (valueStart) {
            let newValue = JSON.parse(valueStart)
            props.setStartEnteredNumber(newValue)
            setStartNum(newValue)
            props.setCurrNumber(newValue)
            props.setStartNumber(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startNum))
        props.setStartEnteredNumber(startNum)
    }, [startNum])




    const classNameForInputMax = maxNum < 0 || maxNum === startNum
    || maxNum < startNum ? s.inputError : s.input

    const classNameForInputStart = startNum < 0 || maxNum === startNum
    || maxNum < startNum ? s.inputError : s.input


    return (
        <div className={s.setting}>

            <div className={s.settingPanel}>

                <div className={s.value}>
                    <span>Max value: </span>
                    <input className={classNameForInputMax}
                           type={"number"}
                           onChange={e => {
                               props.setMaxEnteredNumber(JSON.parse(e.currentTarget.value))
                               setMaxNum(JSON.parse(e.currentTarget.value))
                           }}
                           value={props.maxEnteredNumber}
                    />
                </div>
                <div className={s.value}>
                    <span>Start value: </span>
                    <input
                        className={classNameForInputStart}
                        type={"number"}
                        onChange={e => {
                            props.setStartEnteredNumber(JSON.parse(e.currentTarget.value))
                            setStartNum(JSON.parse(e.currentTarget.value))
                        }}
                        value={props.startEnteredNumber}
                    />
                </div>
            </div>
            <div className={s.buttonDiv}>
                <SuperButton
                    name={"set"}
                    className={props.classNameForButtonInc}
                    callBack={() => props.setValue(props.startEnteredNumber, props.maxEnteredNumber)}
                    disabled={props.disabledForSetValue}
                />
            </div>
        </div>
    );
};

export default Settings;