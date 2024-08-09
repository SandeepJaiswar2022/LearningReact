import { useEffect, useState } from 'react'
import MyCard from './Components/MyCard'
import { ThemeProvider, ThemeContext } from './Contexts/ThemeContext'

function App() {
  const [currentTheme, setThemeMode] = useState('light');

  const toggleTheme = () => {
    if (currentTheme === 'light') setThemeMode('dark');
    if (currentTheme === 'dark') setThemeMode('light');
  }

  useEffect(() => {
    const htmlTag = document.querySelector('html');
    // console.log(htmlTag);
    htmlTag.classList.remove('light', 'dark');
    htmlTag.classList.add(currentTheme);
  }, [currentTheme])
  return (
    <ThemeProvider value={{ currentTheme, toggleTheme }}>
      <h1 className='p-4 text-xl text-center font-bold bg-indigo-200'>Second and efficient way of creating and using context Api</h1>
      <MyCard />
    </ThemeProvider>
  )
}

export default App
