import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyApp1 from './MyApp1.jsx'
import MyApp2 from './MyApp2.jsx'
import ThemeToggleApp from './ThemeToggleApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp1 />
    <MyApp2 />
    <ThemeToggleApp/>
  </React.StrictMode>
)
