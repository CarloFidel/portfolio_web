import { useEffect, useState, type ReactNode } from "react"
import { ThemeContext } from "./Theme.context"

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    return (
        <ThemeContext value={{ theme: theme, setTheme }}>
            {children}
        </ThemeContext>
    )
}