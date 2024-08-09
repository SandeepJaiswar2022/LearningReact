import { useMemo, useRef, useState } from "react"


function ExpensiveCalculation(a,b) {
    const memoizedResult = useMemo(() => expensiveCalculation(), [a, b]);

    function expensiveCalculation() {
        return Math.pow(a, b);
    }

    return (
        <>
            <div className="text-center m-5">
                <h1 className="text-xl font-extrabold">Result : {memoizedResult} </h1>
            </div>
        </>
    )
}


function ImplUseMemoAndUseCallBack() {

    const [a, setA] = useState(1);
    const [b, setB] = useState(1);
    const divToToggle = useRef(null);
    function toggleHiddenClass() {
        divToToggle.current?.classList.toggle("hidden");
    }
    return (
        <>
            <div className="bg-indigo-400 mt-5 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center"> The Expensive Calculation</h1>
                <div className="text-center mb-6">
                    <p className="mb-4 text-lg">.....use of useMemo and useCallback.....</p>
                    <input onChange={(e) => setA(parseInt(e.target.value))} type="text" placeholder="Enter a " className="w-2/3 mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" />
                    <input onChange={(e) => setB(parseInt(e.target.value))} type="text" placeholder="Enter b " className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="text-center m-5">
                    <button onClick={toggleHiddenClass} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Calculate a^b</button>
                </div>
                <div ref={divToToggle} className="hidden">
                    {ExpensiveCalculation(a,b)}
                </div>
            </div>
        </>
    )
}

export default ImplUseMemoAndUseCallBack