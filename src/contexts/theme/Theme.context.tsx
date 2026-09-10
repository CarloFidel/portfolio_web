import { createContext } from "react"

interface ThemeProps {
    theme: 'light' | 'dark'
    setTheme?: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

export const ThemeContext = createContext<ThemeProps>({theme: 'dark'})
