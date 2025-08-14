import { ThemeProvider } from "./Context/ThemeContext";
import { FontSizeProvider } from "./Context/FontSizeContext";

export function SettingsProvider({children}){
    return(
        <ThemeProvider>
            <FontSizeProvider>
                {children}
            </FontSizeProvider>
        </ThemeProvider>
    )
}