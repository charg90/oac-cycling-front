import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
const typography = {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        fontSize: '60px',
        lineHeight: 1.2,
    },
    h2: {
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: 1.2,
        color: '#FFF0F5',
    },
    subtitle1: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.2,
        color: '#f4f4f4',
    },
}

let theme = createTheme({
    palette: {
        primary: {
            main: '#B22222',
        },
        secondary: {
            main: '#3f51b5',
        },
    },
    typography: typography,
})

theme = responsiveFontSizes(theme)
export default theme
type ThemeConfigProps = {
    children: React.ReactNode
}

export const ThemeConfig = ({ children }: ThemeConfigProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
