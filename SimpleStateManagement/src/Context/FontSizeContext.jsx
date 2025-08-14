import { createContext, useState, useContext} from "react";


export const FontSizeContext = createContext();

export function FontSizeProvider({children}){
    const [fontSize, setFontSize] = useState('medium');

    return(
        <FontSizeContext.Provider value={{fontSize, setFontSize}}>
            {children}
        </FontSizeContext.Provider>
    )
}

export function useFontSize(){
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error('useFontSize must be used within a FontSizeProvider');
  return ctx;
}