import { createContext, useContext, useState } from "react";

export const themeContext = createContext()
export const usetheme = () => useContext(themeContext)
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}
