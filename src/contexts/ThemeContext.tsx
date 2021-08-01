import React, { useState, createContext } from 'react';

export interface ThemeProps {
    theme: string,
    setThemeHandler: ( setThemeParam : string) => void;
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps );

export const ThemeProvider : React.FC = ({ children }) => {

    const [ theme, setTheme ] = useState<string>('light');

    const setThemeHandler = ( setThemeParam : string ) => {
        setTheme( setThemeParam );
    };

    return (
        <ThemeContext.Provider value={{theme, setThemeHandler }}>
            { children }
        </ThemeContext.Provider>
    );
};