import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length, setPasswordLength] = useState(8);
  const [isNumberChecked, setNumber] = useState(false);
  const [isSpecialCharaterChecked, setSpecialCharacter] = useState(false);
  const passwordReference = useRef(null);

  const copyPassword = () => {
    passwordReference.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  //Using useCallback to optimize it (memoized)........

  //useCallback() will be called whenever there is even a slight changes in its dependencies and it will optimize(memoized) all its dependencies and funtion call by storing them into cache memory

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdABCDEFGHefghIJKLijklMNOPmnopQRSTqrstUVWXuvwxYZyz";
    let nums = "0123456789";
    let specialChars = "!@#$%^&*()_-+=/\{}[]<>,~";

    if (isNumberChecked) {
      str += nums;
    }
    if (isSpecialCharaterChecked) {
      str += specialChars;
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, isNumberChecked, isSpecialCharaterChecked, setPassword])

  //Using UseEffect to call the passwordGenerator method........

  //Will be executed whenever the page is reloaded or there is any change in its mentions dependencies [length, isNumberChecked, isSpecialCharaterChecked, passwordGenerator]
  //There is no concept of optimization in useEffect.......

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberChecked, isSpecialCharaterChecked, passwordGenerator])



  return (
    <div className="flex w-full h-fit items-center justify-center mt-28 bg-white">
      <div className="bg-indigo-200 flex flex-col items-center justify-center  p-8 rounded-lg shadow-lg w-96 h-96">

        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

        <input ref={passwordReference} value={password} placeholder='Password' id="password" type="text" className="mb-4 w-full p-2 border-2 border-green-600 rounded" readOnly />

        <button onClick={copyPassword} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">Copy</button>


        <div className="mb-4">
          <label className="inline-flex items-center">
            <input value={isNumberChecked} onChange={() => {
              setNumber((prev) => !prev);
            }} type="checkbox" className="form-checkbox text-blue-600" id="includeNumbers" />
            <span className="ml-2">Numbers</span>
          </label>
          <label className="inline-flex m-2 items-center">
            <input value={isSpecialCharaterChecked} onChange={() => {
              setSpecialCharacter((prev) => !prev);
            }} type="checkbox" className="form-checkbox text-blue-600" id="includeSpecialCharacters" />
            <span className="ml-2">Special Characters</span>
          </label>
        </div>


        <div className="mb-2">
          <label htmlFor="passwordLength" className="block text-sm font-medium text-gray-700">Password Length : {length}</label>
          <input id="passwordLength" type="range" min="8" max="20" value={length} onChange={(e) => setPasswordLength(e.target.value)} className="w-full cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default App
