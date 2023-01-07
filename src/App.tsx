import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/main/Counter";
import Settings from "./components/settings/Settings";


function App() {
    const [startNumber, setStartNumber] = useState<number>(0)
    const [maxNumber, setMaxNumber] = useState<number>(0)
    const [currNumber, setCurrNumber] = useState<number>(0)
    //-----------
    const [isChanged, setIsChanged] = useState<boolean>(false)
    const [startEnteredNumber, setStartEnteredNumber] = useState<number>(0)
    const [maxEnteredNumber, setMaxEnteredNumber] = useState<number>(0)

    let value = 0 > maxEnteredNumber || 0 > startEnteredNumber || maxEnteredNumber === startEnteredNumber
    || startEnteredNumber > maxEnteredNumber ? "Incorrect Value"
        : isChanged  ? "enter values and press set" : currNumber

    useEffect(() => {
        if ((startEnteredNumber !== startNumber) || (maxEnteredNumber !== maxNumber)) {
            setIsChanged(true)
        } else {
            setIsChanged(false)
        }
    }, [startEnteredNumber, maxEnteredNumber, startNumber, maxNumber])

    // Buttons
    const setValue = (start: number, max: number) => {
        setStartNumber(start)
        setMaxNumber(max)
        setCurrNumber(start)
    }

    const countNumbers = () => {
        if (currNumber < maxNumber)
            setCurrNumber(currNumber + 1)
    }

    const resetCountNumbers = () => {
        setCurrNumber(startNumber)
    }

    // Styles--------------------------------

    const classNameForButtonInc = "button"
    const classNameForButtonReset = "button"

    const classNameForBoard = startEnteredNumber === maxEnteredNumber || 0 > maxEnteredNumber || 0 > startEnteredNumber
    || maxEnteredNumber === startEnteredNumber || startEnteredNumber > maxEnteredNumber|| isChanged
        ? "board boardError" : "board"

    const classNameForBoardNumber = 0 > maxEnteredNumber || 0 > startEnteredNumber || maxEnteredNumber === startEnteredNumber
    ||  startEnteredNumber > maxEnteredNumber ? "boardError" : isChanged ? "boardSetValue" :
        currNumber === maxEnteredNumber ? "board boardMax" : isChanged ? "boardSetValue" : "boardValue"
// disables-------------------------------

    const disabledForInc = currNumber === maxEnteredNumber || 0 > maxEnteredNumber || 0 > startEnteredNumber ||
        startEnteredNumber === maxEnteredNumber || startEnteredNumber > maxEnteredNumber || isChanged

    const disabledForReset = startEnteredNumber === currNumber || 0 > maxEnteredNumber || 0 > startEnteredNumber
        || maxEnteredNumber === startEnteredNumber || startEnteredNumber > maxEnteredNumber || isChanged

    const disabledForSetValue = 0 > maxEnteredNumber || 0 > startEnteredNumber || maxEnteredNumber === startEnteredNumber
        || startEnteredNumber > maxEnteredNumber || !isChanged

    return (
        <div className="App">
            <div>
                <Settings startEnteredNumber={startEnteredNumber}
                          setStartEnteredNumber={setStartEnteredNumber}
                          maxEnteredNumber={maxEnteredNumber}
                          setMaxEnteredNumber={setMaxEnteredNumber}
                          classNameForButtonInc={classNameForButtonInc}
                          setStartNumber={setStartNumber}
                          setMaxNumber={setMaxNumber}
                          setValue={setValue}
                          setCurrNumber={setCurrNumber}
                          disabledForSetValue={disabledForSetValue}
                />
            </div>
            <div className={"counter"}>
                <Counter
                    countNumbers={countNumbers}
                    number={value}
                    resetCountNumbers={resetCountNumbers}
                    classNameForButtonInc={classNameForButtonInc}
                    classNameForButtonReset={classNameForButtonReset}
                    classNameForBoard={classNameForBoard}
                    disabledForInc={disabledForInc}
                    disabledForReset={disabledForReset}
                    classNameForBoardNumber={classNameForBoardNumber}
                />
            </div>
        </div>
    );
}

export default App;
