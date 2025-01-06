'use client'
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const onToggleTheme = () => {
        setIsDark((prevDark) => !prevDark);
        window.localStorage.setItem("theme", !isDark ? "dark" : "light");
    };

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, onToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
