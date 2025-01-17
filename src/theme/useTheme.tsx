import { createContext, useContext, useEffect, useState } from "react";
import { getItem, setItem } from "../services/storage";
import { Theme, ThemeContextType } from "./types";
import { DARK_THEME, LIGHT_THEME } from "./constants";

export const ThemeContext = createContext<ThemeContextType>({
    theme: LIGHT_THEME,
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

    const toggleTheme = () => {
        const newTheme = theme.name === 'light' ? DARK_THEME : LIGHT_THEME;
        setTheme(newTheme);
        setItem('theme', newTheme.name);
    };

    const getTheme = async () => {
        const storedTheme = await getItem('theme');
        
        if (storedTheme === 'dark') {
            setTheme(DARK_THEME);
            return;
        }

        setTheme(LIGHT_THEME);
    };

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    
    return context;
};