import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext(
    {
        currentTheme: 'light',
        toggleTheme: () => { }
    }
)

export const ThemeProvider = ThemeContext.Provider;

export function useMyTheme() {
    return useContext(ThemeContext)
}
