import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [value, setValue] = useState("");
    const timerRef = useRef();
    const [show, setShow] = useState(false)

    useEffect(() => {

        return () => {
            if (timerRef.current && !show)
                clearInterval(timerRef.current)
        }
    }, [show])

    const handleChange = (e) => {
        if (e.target.value.length <= 2) {
            setValue(e.target.value)
        }
        // console.log(typeof e.target.value)
        // console.log(e.target.maxLength)

    }

    const handleStart = () => {

        if (timerRef.current) return;

        timerRef.current = setInterval(() => {

            setValue((prep => {
                if (prep <= 1) {
                    clearInterval(timerRef.current);
                    return 0
                }
                return prep - 1
            }));
            console.log("inside handleStartfunction", value)
        }, 1000)
    }

    const handleReset = () => {
        if (timerRef.current) {
            setValue(0);
            clearInterval(timerRef.current)
            timerRef.current = null
        } else if (value != 0) setValue(0)
    }

    const handleStop = () => {
        if (timerRef.current)
            clearInterval(timerRef.current)
        timerRef.current = null
    }

    console.log("outside", value)
    return (
        <div id='timer__component'>

            {!show && <>
                <div className='timer__input-number'>
                    <label>Number</label>
                    <input
                        maxLength={"2"}
                        type={"number"}
                        value={value}
                        onChange={handleChange}
                        placeholder="00"
                    />
                </div>
                <div className='timer__buttons'>
                    <button onClick={handleStart} >Start</button>
                    <button onClick={handleReset} >Reset</button>
                    <button onClick={handleStop} >Stop</button>
                </div>
            </>}
            <h1 style={{ cursor: "pointer", background: "purple", padding: "5px 8px" }}
                onClick={() => setShow(!show)}
            >
                {show ? "SHOW" : "HIDE"}
            </h1>
        </div>

    )
}

export default Timer