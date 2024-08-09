import React from 'react'
import { useMyTheme } from '../Contexts/ThemeContext';


function ThemeTogglerButton() {
  const { currentTheme, toggleTheme } = useMyTheme();
  const changeTheme = (e) => {
    toggleTheme();
  }
  return (
    <div>
      <button id="themeToggler" onClick={changeTheme} className="p-2 rounded-full font-medium bg-black text-white dark:bg-blue-500 dark:text-white">
        Switch to {currentTheme === 'dark' ? 'light' : 'dark'} Mode
      </button>
    </div>
  )
}

export default ThemeTogglerButton
