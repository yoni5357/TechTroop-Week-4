import { createContext,useState,useContext } from "react";


export const ThemeContext = createContext();

export function ThemeProvider({children}){

    const [theme, setTheme] = useState('light');
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}