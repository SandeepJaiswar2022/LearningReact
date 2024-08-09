import { useState, useRef } from 'react'

/*
Exercise 2: Persist Previous State Value
Create a component with the following features:

1. A counter that increments or decrements when buttons are clicked.
2. Display the current count and the previous count value.
*/

function PrevState() {
    const [counter, setCounter] = useState(0);
    const previousCounterReference = useRef(0);
    const counterIncrement = () => {
        if (counter < 10) {
            previousCounterReference.current = counter
            setCounter(counter + 1)
        }
    }
    const counterDecrement = () => {
        if (counter > 0) {
            previousCounterReference.current = counter
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div className="w-96 h-60  space-y-3 border bg-red-200 m-6 p-6">
                <h2>Exercise 2: Persist Previous State Value</h2>
                <div className=" bg-white w-36 h-10 m-24 p-2">Prev Counter :   {previousCounterReference.current} </div>
                <div className=" bg-white w-36 h-10 m-24 p-2">Counter :   {counter} </div>
                <div className="m-10 rounded-lg shadow-sm">
                    <button onClick={counterIncrement} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Increment </button>
                    <button onClick={counterDecrement} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Decrement</button>
                </div>
            </div>
        </>
    )
}

export default PrevState;
