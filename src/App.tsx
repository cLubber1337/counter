import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/main/Counter";
import Settings from "./components/settings/Settings";


function App() {
    const [startNumber, setStartNumber] = useState<number>(0)
    const [maxNumber, setMaxNumber] = useState<number>(0)
    const [currNumber, setCurrNumber] = useState<number>(0)
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

    // Styles
    let value = 0 > maxNumber || 0 > startNumber || maxNumber === startNumber
        || startNumber > maxNumber
        ? "Incorrect Value" : currNumber

    const classNameForButtonInc = "button"
    const classNameForButtonReset = "button"
    const classNameForBoard = currNumber === maxNumber || 0 > maxNumber || 0 > startNumber
    || maxNumber === startNumber
        ? "board boardMax" : "board"
    const classNameForBoardNumber = 0 > maxNumber || 0 > startNumber || maxNumber === startNumber
    || startNumber > maxNumber ? "boardError" :
        currNumber === maxNumber? "boardMax" : "boardValue"



    const disabledForInc = currNumber === maxNumber || 0 > maxNumber || 0 > startNumber ||
        startNumber=== maxNumber
    const disabledForReset = startNumber === currNumber || 0 > maxNumber || 0 > startNumber
        || maxNumber === startNumber
    const disabledForSetValue = 0 > maxNumber || 0 > startNumber || maxNumber === startNumber



    return (
        <div className="App">
            <div>
                <Settings classNameForButtonInc={classNameForButtonInc}
                          setStartNumber={setStartNumber}
                          setMaxNumber={setMaxNumber}
                          startNumber={startNumber}
                          maxNumber={maxNumber}
                          setValue={setValue}
                          currNumber={currNumber}
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
