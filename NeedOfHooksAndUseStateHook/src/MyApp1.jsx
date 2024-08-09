import { useState } from 'react'
import './App.css'

/*
Exercise 2: Toggle Visibility
Create an application that toggles the visibility of a piece of text:

1. A button to toggle the visibility of the text.
2. When the button is clicked, the text should either be shown or hidden, depending on its current state.
3. The button text should change to "Show" when the text is hidden and "Hide" when the text is visible.
*/

function MyApp1() {
    const [contentToToggle, setVisibility] = useState('IWillBeHidden');
    const [btnText, setBtnText] = useState('Hide');


    // const toggleTextVisibility = (event) => {
    //     const target = event.target;
    //     if (target.innerText === 'Hide') {
    //         target.innerText = 'Show';
    //         setVisibility('');
    //     }
    //     else {
    //         target.innerText = 'Hide';
    //         setVisibility('IWillBeHidden');
    //     }
    // }
    const toggleTextVisibility = () => {
        if (btnText === 'Hide') {
            // console.log("Hide Clicked");
            setBtnText('Show');
            setVisibility('');
        }
        else {
            setBtnText('Hide');
            setVisibility('IWillBeHidden');
        }
    }


    return (
        <>
            <h2>2. Toggle Visibility </h2>
            <div>
                <button onClick={toggleTextVisibility} className="btn">{btnText}</button>
            </div>
            <div>
                {/* <p>Value of counter [Content : ]</p> */}
                <p>Content to Hide or Show  [Content : <mark>{contentToToggle}</mark>]</p>
            </div>
            <hr />
        </>
    )
}

export default MyApp1
