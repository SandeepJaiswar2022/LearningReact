import { useState } from 'react'
import './App.css'
function ThemeToggleApp() {
    const [color,setColor] = useState("light");
    function toggleTheme()
    {
        if(color==="light")
        setColor("dark");
        else
        setColor("light")
    }

    return (
        <>
            <div className={`myApp ${color}`}>
                <h2>This is an example of the ThemeToggler</h2>
                <br /> <br /> <br />
                <p>This is an example of the <mark>{color}</mark> ThemeToggler</p>
                <button onClick={toggleTheme} className={`myApp ${color ==='dark' ? 'white':'dark'}`} >Switch to {color === 'dark' ? "light" : "dark"} mode</button>
            </div>
        </>
    )
}

export default ThemeToggleApp