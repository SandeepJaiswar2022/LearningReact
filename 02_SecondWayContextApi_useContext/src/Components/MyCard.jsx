import React from 'react'
import ThemeTogglerButton from '../Components/ThemeTogglerButton';
import { useMyTheme } from '../Contexts/ThemeContext';
function MyCard() {
    const {currentTheme} = useMyTheme();
    return (
        <div className='m-10 p-4 dark:bg-gray-700 dark:text-white text-center bg-blue-500 text-black'>
            <ThemeTogglerButton />
            <h2 className='text-lg font-semibold p-3'>This is a {currentTheme} theme</h2>
        </div>
    )
}

export default MyCard
