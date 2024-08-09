import { useState } from 'react'
import './App.css'

/*
Exercise 3: Form Input Handler
Create a simple form with the following features:

1. An input field for entering text.
2. A button to submit the form.
3. A display area that shows the entered text after the form is submitted.
*/

function MyApp2() {
    const [inputFieldText, setInputText] = useState('');
    const [areaFieldText, setAreaText] = useState('');


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
    const formHandler = (event) => {
        event.preventDefault();
        // console.log(event.target);
        setAreaText(inputFieldText)
        setInputText(''); // Clear input field after submission

    }

    const handleOnChange = (event) => {
        setInputText(event.target.value);
    }


    return (
        <>
            <h2>2. Form Input Handler</h2>
            <div>
                <form onSubmit={formHandler} method='post'>
                    <label htmlFor="textInput">Enter Anything : </label>
                    <input id='textInput' value={inputFieldText} type="text" required onChange={handleOnChange} />
                    <br />
                    <br />
                    <button type='submit' className="btn">SubmitText</button>
                </form>
                <div>
                    <textarea defaultValue={areaFieldText} rows="5" cols="33">
                    </textarea>
                </div>
            </div>
            <hr />
        </>
    )
}

export default MyApp2
